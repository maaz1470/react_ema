import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = () => {
    return (
        <div>
            <div className="single-product">
                <img src="" alt="" />
                <div className="title">
                    <h3>Product Name</h3>
                </div>
                <div className="details">
                    <ul>
                        <li><a href="#">Something</a></li>
                        <li><a href="#">Something</a></li>
                    </ul>
                </div>
                <div className="cart">
                    <button>Add to Cart <FontAwesomeIcon icon={faCartPlus} /></button>
                </div>
            </div>
        </div>
    );
};

export default Product;