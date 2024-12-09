// Cart.js
import React from 'react';
import "./Cart.css";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { MdOutlineDelete } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cartActions';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems); // Access cart items from the Redux store
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id)); // Dispatch remove from cart action
    };

    return (
        <div>
            <Navbar />
            <div className="cart">
                {cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.src} alt={item.name} className="item-image" />
                        <div className="item-details">
                            <h3>{item.name}</h3>
                            <p className="delivery-info">Delivery by Thu Aug 22 | Free</p>
                            <div className="price-section">
                                <span className="originalprice">{item.price}</span>
                                <span className="C-discount">{item.discount}</span>
                            </div>
                        </div>
                        <div className="item-actions">
                            <button className="quantity-btn">-</button>
                            <span className="quantity">1</span>
                            <button className="quantity-btn">+</button>
                            <button
                                className="remove-btn"
                                onClick={() => handleRemoveFromCart(item.id)} // Call handleRemoveFromCart when clicked
                            >
                                <MdOutlineDelete />
                            </button>
                        </div>
                    </div>
                ))}
               <Link to="/delivery"><button className="place-order-btn">PLACE ORDER</button></Link> 
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
