import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  products: [],
  error: '',
};

export const getProductList = createAsyncThunk('getProductList', async () => {
  try {
    const { data } = await axios.get(`/api/products`);
    return data;
  } catch (error) {
    return error;
  }
});

export const productListSlice = createSlice({
  name: 'productList',
  initialState,
  extraReducers: {
    [getProductList.pending]: state => {
      return {
        loading: true,
      };
    },
    [getProductList.fulfilled]: (state, action) => {
      return {
        loading: false,
        products: action.payload,
      };
    },
    [getProductList.rejected]: (state, action) => {
      return {
        loading: false,
        error: action.payload,
      };
    },
  },
});

export default productListSlice.reducer;
