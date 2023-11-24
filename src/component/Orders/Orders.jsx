import React, { useEffect, useState } from 'react';
import './Order.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import OrderProduct from './OrderProduct';
import { getShoppingCart, removeFromDb } from '../utilities/fakedb';
const Orders = () => {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])

    const clearCart = () => {

    }

    useEffect(() => {
        const storedCart = getShoppingCart();
        let storedProduct = [];
        for(const id in storedCart){
            let data = products.find(product => product.id == id)
            
            if(data){
                const currentProduct = storedCart[id];
                data.quantity = currentProduct;
                storedProduct.push(data);
            }
        }
        setCart(storedProduct)
    },[products])

    // console.log(cart)

    const deleteCartProduct = (id) => {
        const some = cart.filter(el => el.id !== id);
        setCart(some)
        removeFromDb(id)
    }
    return (
        <div>
            <div className="orders">
                <div className="container">
                    <div className="grid">
                        <div className="order-product">
                            {
                                cart.map(el => <OrderProduct deleteCartProduct={deleteCartProduct} key={el.id} product={el}></OrderProduct>)
                            }
                        </div>
                        <Cart cart={cart} clearCart={clearCart} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;