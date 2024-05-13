
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';


const Navbar = ({ searchTerm }) => {
  const state = useSelector((state) => state.handleCart);

  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-gradient" style={{ backgroundColor: '#6A5ACD', border: '1px solid black'}}>

        <div className="container">
          <Link
            className="navbar-brand"
            to="/"
            style={{ fontWeight: '900', fontSize: '35px', color: 'white' }}>
            ESTORE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/" style={{ fontWeight: 'bold',color: 'white' }}>

                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products"style={{ fontWeight: 'bold',color: 'white' }}>
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about"style={{ fontWeight: 'bold',color: 'white' }}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact"style={{ fontWeight: 'bold',color: 'white' }}>
                  Contact
                </NavLink>
              </li>
            </ul>    
          

          <Link to="/search" className="btn btn-outline-dark ms-2" style={{ color: 'white', borderColor: 'white' }}>
              <FaSearch className="me-2" /> 
              Search
          </Link>

            <div className="buttons">
            <NavLink to="/cart" className="btn btn-outline-dark ms-2" style={{ fontWeight: 'bold', color: 'white', borderColor: 'white' }}>

                <i className="fa fa-shopping-cart me-1"></i> Cart({state.length})
              </NavLink>
            </div> 
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
