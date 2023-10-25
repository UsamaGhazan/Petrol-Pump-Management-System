import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
  Link,
  useLocation,
} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import SidebarContent from './Components/Dashboard Components/SidebarContent';
import ProductsScreen from './Screens/ProductsScreen';
import LoginScreen from './Screens/LoginScreen';
import EmployeesListScreen from './Screens/EmployeesListScreen';
import AddNewEmployeeScreen from './Screens/AddNewEmployeeScreen';
function App() {
  return (
    <BrowserRouter>
      <SidebarContent />
      <main>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/dashboard" element={<HomeScreen />} />
          <Route path="/products" element={<ProductsScreen />} />
          <Route path="/employees" element={<EmployeesListScreen />} />
          <Route path="/addEmployee" element={<AddNewEmployeeScreen />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
