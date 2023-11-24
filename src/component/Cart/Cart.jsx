import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({cart, clearCart}) => {

    let total = 0;
    let quantity = 0;
    let grandTotal = 0;
    for(const pro of cart){
        pro.quantity = pro.quantity || 1
        total = total + pro.price * pro.quantity
        quantity = quantity + pro.quantity;
    }

    
    
    let shippingCharge = total == 0 ? 50 : 0;
    
    grandTotal = total + shippingCharge;

    return (
        <div>
            <div className="order-summary">
                <div className="cart-title">
                    <h2>Order Summary</h2>
                </div>
                <div className="order-info">
                    <ul>
                        <li>Selected Items: {quantity}</li>
                        <li>Total Price: ${total.toFixed(2)}</li>
                        <li>Total Shipping Charge: ${shippingCharge}</li>
                    </ul>
                </div>
                <div className="total">
                    <h3>Grand Total: {grandTotal.toFixed(2)}</h3>
                </div>
                <div className="cart-info">
                    <button onClick={clearCart} className='remove'>Clear Cart <FontAwesomeIcon icon={faTrashCan} /></button>
                    <Link className="review" to={'/orders'}>Review Order <FontAwesomeIcon icon={faArrowRight} /></Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;