import { configureStore } from '@reduxjs/toolkit';
import productsListSlice from './Features/productsListSlice';
import loginEmployeeSlice from './Features/loginSlice';

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
  },
  preloadedState: initialState,
});
