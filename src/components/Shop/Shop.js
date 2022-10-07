import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const products = useLoaderData();
    // const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    // useEffect(() => {
    //     fetch('products.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data));
    // }, []);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (selectedProduct) => {
        // console.log(product);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        // console.log(exists);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct.id);

    }
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to="/orders">
                        <button className='review-btn'>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;