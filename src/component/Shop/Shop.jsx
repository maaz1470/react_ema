import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from './Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { addDB, getShoppingCart } from '../utilities/fakedb';
const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])

    useEffect(() => {
        const storedCart = getShoppingCart();
        // console.log(storedCart)
        let savedCart = [];
        for(const id in storedCart){
            const storedProduct = products.find((product) => product.id == id);
            if(storedProduct){
                const quantity = storedCart[id];
                storedProduct.quantity = quantity;

                savedCart.push(storedProduct)
            }
        }
        setCart(savedCart)
        
    },[products])


    const handleCart = (e, product) => {

        let newCart = [];

        const exists = cart.find(pd => pd.id == product.id);

        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product];
            
        }else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id != product.id)
            newCart = [...remaining, exists]

        }

        setCart(newCart)
        addDB(product.id)
    }

    let total = 0;
    let quantity = 0;
    for(const pro of cart){
        pro.quantity = pro.quantity || 1
        total = total + pro.price * pro.quantity
        quantity = quantity + pro.quantity;
        console.log(pro.quantity)
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
                                    <li>Selected Items: {quantity}</li>
                                    <li>Total Price: ${total.toFixed(2)}</li>
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