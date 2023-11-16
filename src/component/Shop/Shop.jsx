import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from './Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])

    const handleCart = (e, product) => {
        setCart([
            ...cart,
            product
        ])
    }
    return (
        <div>
            <div className="shop">
                <div className="container">
                    <div className="shop-row">
                        <div className="products">
                            {
                                products.map((el, index) => {
                                    return <Product key={index} product={el} handleCart={handleCart} />
                                })
                            }
                        </div>
                        <div className="order-summary">
                            <div className="cart-title">
                                <h2>Order Summary</h2>
                            </div>
                            <div className="order-info">
                                <ul>
                                    <li>Selected Items: 6</li>
                                    <li>Total Price: $110</li>
                                    <li>Total Shipping Charge: $50</li>
                                    <li>Tax: $114</li>
                                </ul>
                            </div>
                            <div className="total">
                                <h3>Grand Total: 99$</h3>
                            </div>
                            <div className="cart-info">
                                <button className='remove'>Clear Cart <FontAwesomeIcon icon={faTrashCan} /></button>
                                <button className="review">Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;