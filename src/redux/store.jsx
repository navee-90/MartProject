// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice'
import cartIconReducer from './cartIcon'


export const store = configureStore({
  reducer: {
    product: productReducer,
    cart:cartReducer,
    cartIcon:cartIconReducer
  },
 
});
