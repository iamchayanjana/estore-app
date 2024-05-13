// SearchOption.js

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { Link } from 'react-router-dom';

function SearchOption() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterProducts(e.target.value);
  };

  const filterProducts = (searchTerm) => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mt-4">
      <div className="search-container mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search here for your favorite products....."
          className="form-control shadow-none" // Added shadow-none for removing the default box shadow
          style={{ border: '2px solid #ccc', borderRadius: '5px', backgroundColor: 'LightGray'}} // Added border and border-radius for custom styling
        />
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="col">
            <div className="card h-100"> {/* Added h-100 for fixed height */}
              <div className="card-img-container" style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                />
              </div>
              <div className="card-body d-flex flex-column justify-content-between"> {/* Added d-flex, flex-column, and justify-content-between */}
                <div>
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">Category: {product.category}</p>
                </div>
                <div>
                  <p className="card-text">Price: ${product.price}</p>
                  <p className="card-text">Rating: {product.rating && product.rating.rate}</p>
                </div>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary" onClick={() => addProduct(product)}>
                  Add to Cart
                </button>
                <Link to="/cart" className="btn btn-dark ms-2">
                  Go to Cart
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchOption;
