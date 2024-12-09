import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from './wishlistActions';

const initialState1 = {
    wishlist: []
};

export const wishlistReducer = (state1 = initialState1, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return {
                ...state1,
                wishlist: [...state1.wishlist, action.payload]
            };
        case REMOVE_FROM_WISHLIST:
            return {
                ...state1,
                wishlist: state1.wishlist.filter(item => item.id !== action.payload)
            };
        default:
            return state1;
    }
};
