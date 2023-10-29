import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};
export const sellProducts = createAsyncThunk(
  'sellProduct',
  async (products, thunkAPI) => {
    console.log(products);
    try {
      const {
        //userLogin .getState() sy nikalo aur userInfo variable usy day do
        employeeLogin: { employeeInfo },
      } = thunkAPI.getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${employeeInfo.token}`,
        },
      };
      const { data } = await axios.post(
        `/api/products/sellProducts`,
        products,
        config
      );
      return data;
    } catch (error) {
      const newError =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      //This will end up in rejected section as payload... just error return karny sy fulfilled action run hora tha
      return thunkAPI.rejectWithValue(newError);
    }
  }
);

const sellProductSlice = createSlice({
  name: 'sellProduct',
  initialState,
  reducers: {
    PRODUCT_SELL_RESET: () => {
      return { success: false };
    },
  },
  extraReducers: {
    //extra reducers sirf async operations k leye hein ... normally reducer use hongay
    [sellProducts.pending]: state => {
      return {
        loading: true,
      };
    },

    [sellProducts.fulfilled]: (state, action) => {
      return {
        loading: false,
        success: true,
      };
    },

    [sellProducts.rejected]: (state, action) => {
      return {
        loading: false,
        error: action.payload,
      };
    },
  },
});
export const { PRODUCT_SELL_RESET } = sellProductSlice.actions;
export default sellProductSlice.reducer;
