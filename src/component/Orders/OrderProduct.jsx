import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const OrderProduct = ({product, deleteCartProduct}) => {

    return (
        <div>
            <div className="product">
                <div className="product-info">
                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="product-details">
                        <div className="title">
                            <h3>{product.title}</h3>
                        </div>
                        <div className="price">
                            <p>Price: <span>{product.price}$</span></p>
                        </div>
                    </div>
                </div>
                <div className="trash">
                    <FontAwesomeIcon onClick={() => deleteCartProduct(product.id)} icon={faTrashCan} />
                </div>
            </div>
        </div>
    );
};

export default OrderProduct;