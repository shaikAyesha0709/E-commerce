import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../../redux/wishlistActions';
import { addToCart } from '../../redux/cartActions'; 
import './Wishlist.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { MdOutlineDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const wishlistItems = useSelector(state => state.wishlist.wishlist || []);
    const dispatch = useDispatch();

    const handleRemoveClick = (id) => {
        dispatch(removeFromWishlist(id));
    };
    const handleAddToCart = (item) => {
        dispatch(addToCart(item));  
    };
    return (
        <div>
            <Navbar />
            <div className="wishlist">
                {wishlistItems.length === 0 ? (
                    <div className="empty-wishlist">
                        <h2>Your Wishlist is Empty</h2>
                        <p>It looks like you haven't added anything to your wishlist yet.</p>
                        <p>Explore our collections and start adding your favorite items!</p>
                        <Link to="/" className="explore-button">Start Shopping</Link>
                    </div>
                ) : (
                    wishlistItems.map(item => (
                        <div className="wishlist-item" key={item.id}>
                            <img src={item.src} alt={item.name} className="item-image" />
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <div className="price-section">
                                    <span className="original-price">{item.price}</span>
                                    <span className="w-discount">{item.discount}</span>
                                </div>
                            </div>
                            <button 
            className='add-to-cart'
            onClick={() => handleAddToCart(item)}>
              Add to Cart
            </button>
                            <button className="deleteBtn" onClick={() => handleRemoveClick(item.id)}>
                                <MdOutlineDelete />
                            </button>
                        </div>
                    ))
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Wishlist;
