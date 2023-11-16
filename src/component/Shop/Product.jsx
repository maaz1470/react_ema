import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {product, handleCart} = props;
    return (
        <div>
            <div className="single-product">
                <div className="image">
                    <img src={product.image} alt="" />
                </div>
                <div className="title">
                    <h3>{product.title.substring(0,30)}</h3>
                </div>
                <div className="price">
                    <h4>${product.price}</h4>
                </div>
                <div className="details">
                    <ul>
                        <li>Something: <a href="#">Something</a></li>
                        <li>Something: <a href="#">Something</a></li>
                    </ul>
                </div>
                <div className="cart">
                    <button onClick={(e) => handleCart(e, product)}>Add to Cart <FontAwesomeIcon icon={faCartPlus} /></button>
                </div>
            </div>
        </div>
    );
};

export default Product;