import { configureStore } from '@reduxjs/toolkit';
//El nombre pude cambiar
import cartReducer from './features/cart/cartSlice';
import modalReducer from './features/modal/modalSlice'
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer
    },
});