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
} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import SidebarContent from './Components/Dashboard Components/SidebarContent';
import ProductsScreen from './Screens/ProductsScreen';
function App() {
  return (
    <BrowserRouter>
      <SidebarContent />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/products" element={<ProductsScreen />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
