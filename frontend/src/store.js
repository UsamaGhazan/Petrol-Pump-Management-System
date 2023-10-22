import { configureStore } from '@reduxjs/toolkit';
import productsListSlice from './Features/productsListSlice';
import loginEmployeeSlice from './Features/loginSlice';
import productUpdateSlice from './Features/productUpdateSlice';

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
  },
  preloadedState: initialState,
});
