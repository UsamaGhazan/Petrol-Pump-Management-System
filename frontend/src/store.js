import { configureStore } from '@reduxjs/toolkit';
import productsListSlice from './Features/productsListSlice';

const initialState = {};

export const store = configureStore({
  reducer: {
    productList: productsListSlice,
  },
});
