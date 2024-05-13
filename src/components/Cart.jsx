import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteCart } from "../redux/action";

const Cart = () => {
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(deleteCart(item));
    };

    const cartItems = (product) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
                <div className="container py-4">
                    <button onClick={() => handleClose(product)} className="btn-close btn-close-black float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={product.image} alt={product.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className="lead fw-bold">
                            {product.qty} x ${product.price} = $
                            {product.qty * product.price}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty !</h3>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="cart-container" style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column' }}>
            {state && state.length === 0 && emptyCart()}
            {state && state.length !== 0 && state.map(cartItems)}
            </div>
    );
};

export default Cart;
