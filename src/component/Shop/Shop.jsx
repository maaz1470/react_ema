import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from './Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { addDB, deleteShoppingCart, getShoppingCart } from '../utilities/fakedb';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
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

    const clearCart = () => {
        deleteShoppingCart();
        setCart([])
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
                        <Cart cart={cart} clearCart={clearCart} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;