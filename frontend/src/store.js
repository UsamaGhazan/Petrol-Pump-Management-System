import { configureStore } from '@reduxjs/toolkit';
import productsListSlice from './Features/productsListSlice';
import loginEmployeeSlice from './Features/loginSlice';
import productUpdateSlice from './Features/productUpdateSlice';
import productDeleteSlice from './Features/productDeleteSlice';
import productCreateSlice from './Features/productCreateSlice';
import employeeDeleteSlice from './Features/employeeDeleteSlice';
import employeeListSlice from './Features/employeeListSlice';

const employeeInfoFromStorage = localStorage.getItem('employeeInfo')
  ? JSON.parse(localStorage.getItem('employeeInfo'))
  : null;
const initialState = {
  employeeLogin: {
    employeeInfo: employeeInfoFromStorage,
  },
};
export const store = configureStore({
  reducer: {
    productList: productsListSlice,
    employeeLogin: loginEmployeeSlice,
    productUpdate: productUpdateSlice,
    productDelete: productDeleteSlice,
    productCreate: productCreateSlice,
    employeeList: employeeListSlice,
    employeeDelete: employeeDeleteSlice,
  },
  preloadedState: initialState,
});
