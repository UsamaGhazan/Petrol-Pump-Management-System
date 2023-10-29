import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Input,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';

export const products = [
  {
    id: 1,
    name: 'Product 1',
    previousStock: 10,
    newStock: 500,
    sale: 400,
    remainingBalance: 600,
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    previousStock: 15,
    newStock: 700,
    sale: 500,
    remainingBalance: 700,
    price: 200,
  },
  {
    id: 3,
    name: 'Product 3',
    previousStock: 20,
    newStock: 800,
    sale: 600,
    remainingBalance: 900,
    price: 150,
  },
  {
    id: 4,
    name: 'Product 4',
    previousStock: 8,
    newStock: 600,
    sale: 350,
    remainingBalance: 650,
    price: 300,
  },
  {
    id: 5,
    name: 'Product 5',
    previousStock: 12,
    newStock: 900,
    sale: 700,
    remainingBalance: 1100,
    price: 250,
  },
  {
    id: 6,
    name: 'Product 6',
    previousStock: 18,
    newStock: 750,
    sale: 550,
    remainingBalance: 1200,
    price: 180,
  },
  {
    id: 7,
    name: 'Product 7',
    previousStock: 7,
    newStock: 400,
    sale: 320,
    remainingBalance: 480,
    price: 210,
  },
  {
    id: 8,
    name: 'Product 8',
    previousStock: 14,
    newStock: 950,
    sale: 800,
    remainingBalance: 1100,
    price: 280,
  },
  {
    id: 9,
    name: 'Product 9',
    previousStock: 22,
    newStock: 850,
    sale: 700,
    remainingBalance: 1270,
    price: 170,
  },
  {
    id: 10,
    name: 'Product 10',
    previousStock: 6,
    newStock: 300,
    sale: 250,
    remainingBalance: 350,
    price: 350,
  },
];

const SellProductScreen = () => {
  const navigate = useNavigate();
  const [productQuantities, setProductQuantities] = useState(
    products.map(product => ({
      name: product.name,
      quantity: 0,
      price: product.price,
    }))
  );
  console.log(productQuantities);
  useEffect(() => {
    setProductQuantities(
      products.map(product => ({
        name: product.name,
        quantity: 0,
        price: product.price,
      }))
    );
  }, []);

  const handleQuantityChange = (index, newQuantity) => {
    setProductQuantities(prevQuantities => {
      const updatedQuantities = [...prevQuantities];
      updatedQuantities[index] = {
        ...updatedQuantities[index],
        quantity: newQuantity,
      };
      return updatedQuantities;
    });
  };
  const handleProceed = () => {
    navigate('/confirmation', { state: productQuantities });
  };

  return (
    <Box
      pos={'absolute'}
      width={'1184px'}
      h={'100vh'}
      border={'1px solid #E2E8F0'}
      mt={'104px'}
      ml={'305px'}
      bg={'white'}
      borderRadius={'20px'}
    >
      <Box padding={'24px'}>
        <HStack spacing={'800px'}>
          <Heading fontSize={'20px'} fontWeight={700} fontFamily={'lato'}>
            Sell Product
          </Heading>
        </HStack>

        <Table variant="striped" colorScheme="customColorScheme" mt={'20px'}>
          <Thead>
            <Tr>
              <Th color={'#A0AEC0'}>Name</Th>
              <Th color={'#A0AEC0'} textAlign="center">
                Quantity
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {productQuantities.map((item, index) => (
              <Tr key={index} height={'80px'}>
                <Td>
                  <Box fontWeight={'bold'}>{item.name}</Box>
                </Td>
                <Td>
                  <HStack justifyContent="center">
                    <Button
                      bg={'#D3D3D3'}
                      onClick={() =>
                        handleQuantityChange(
                          index,
                          Math.max(item.quantity - 1, 0)
                        )
                      }
                    >
                      -
                    </Button>
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={e =>
                        handleQuantityChange(
                          index,
                          parseInt(e.target.value) || 0
                        )
                      }
                      w="60px"
                      textAlign="center"
                    />
                    <Button
                      bg={'#D3D3D3'}
                      onClick={() =>
                        handleQuantityChange(index, item.quantity + 1)
                      }
                    >
                      +
                    </Button>
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Center>
          <Button
            bg={'#687EFF'}
            color={'white'}
            mt={'10px'}
            size={'lg'}
            _hover={'#4E67CC'}
            _active={'#4E67CC'}
            onClick={handleProceed}
          >
            Proceed
          </Button>
        </Center>
      </Box>
    </Box>
  );
};

export default SellProductScreen;
