import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let shipping = 0;
    for (const products of cart) {
        total = total + products.price;
        shipping = shipping + products.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));

    const grandTotal = (total + shipping + tax).toFixed(2);
    return (
        <div className="cart">
            <h4>Order summary </h4>
            <p>Selected Items : {cart.length} </p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping : ${shipping} </p>
            <p>Tax : ${tax}</p>
            <h5>Grand Total : ${grandTotal} </h5>

            
        </div>
    );
};

export default Cart;