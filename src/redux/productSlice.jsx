// src/redux/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    selectedProduct: null, 
  },
  reducers: {
    setProductDetails: (state, action) => {
      state.selectedProduct = action.payload; 
    },
  },
});

export const { setProductDetails } = productSlice.actions;
export default productSlice.reducer;
