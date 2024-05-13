import React, { useState, useEffect, useRef } from 'react';
import Skeleton from "react-loading-skeleton";
import { Link } from 'react-router-dom';

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const componentMounted = useRef(true); // Using useRef to preserve the value over renders

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");

            if (componentMounted.current) { // Accessing the value with .current
                const jsonData = await response.json();
                setData(jsonData);
                setFilter(jsonData);
                setLoading(false);
            }
        }

        getProducts();

        return () => {
            componentMounted.current = false; // Updating the value on unmount
        }
    }, []);

    const Loading = () => {
        return (
            <>
               <div className="col-md-3">
                   <Skeleton height={350}/>
                </div> 
                <div className="col-md-3">
                   <Skeleton height={350}/>
                </div> 
                <div className="col-md-3">
                   <Skeleton height={350}/>
                </div> 
                <div className="col-md-3">
                   <Skeleton height={350}/>
                </div> 
            </>
        );
    };
    
    const filterProducts = (cat) => {
        const updatedList = data.filter((x)=>x.category === cat);
        setFilter(updatedList); 
    }
    
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProducts("men's clothing")}>Men's Cloths</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProducts("women's clothing")}>Womenen's Cloths</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProducts("jewelery")}>Jewelery </button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProducts("electronics")}>Electronic</button>
                </div>
                {filter.map((products) => {
                    
                    return (
                        <div className="col-md-3 mb-4" key={products.id}>
                            <div className="card h-100 text-center p-4">
                                <img src={products.image} className="card-img-top" alt={products.title} height="250px" />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{products.title.substring(0,12)}</h5>
                                    <p className="card-text lead fw-bold">
                                        ${products.price}
                                    </p>
                                    <Link to={`/products/${products.id}`} className="btn btn-primary">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    };

    return (
        <>
          <div className="container my-5 py-5" >

                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Product</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </>
    );
};

export default Products;
