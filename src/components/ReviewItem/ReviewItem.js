import React from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReviewItem = ({ product, handleRemoveItem }) => {
    const { id, img, name, price, shipping, quantity } = product;

    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className="review-details">
                    <hp>{name}</hp>
                    <p>Price: ${price}</p>
                    <p>Shipping: ${shipping}</p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={()=> handleRemoveItem(id)} className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;