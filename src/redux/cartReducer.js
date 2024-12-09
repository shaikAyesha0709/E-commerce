// redux/cartReducer.js
import { ADD_TO_CART, REMOVE_FROM_CART } from './cartActions';

const initialState = {
    cartItems: [], // Ensure this is initialized as an empty array
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload),
            };
        default:
            return state;
    }
};

export default cartReducer;
