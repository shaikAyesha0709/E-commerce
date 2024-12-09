// src/redux/wishlistActions.js
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';

export const addToWishlist = (item) => {
    return {
        type: ADD_TO_WISHLIST,
        payload: item
    };
};

export const removeFromWishlist = (id) => {
    return {
        type: REMOVE_FROM_WISHLIST,
        payload: id
    };
};
