import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaEdit } from 'react-icons/fa'; // Import the FaEdit icon
import SearchBar from '../Components/SearchBar';
import { AiOutlineUser } from 'react-icons/ai';

const products = [
  {
    name: 'Product 1',
    previousStock: 10,
    newStock: 500,
    sale: 400,
    remainingBalance: 600,
  },
  {
    name: 'Product 2',
    previousStock: 15,
    newStock: 700,
    sale: 500,
    remainingBalance: 700,
  },
  {
    name: 'Product 3',
    previousStock: 20,
    newStock: 800,
    sale: 600,
    remainingBalance: 900,
  },
  {
    name: 'Product 4',
    previousStock: 8,
    newStock: 600,
    sale: 350,
    remainingBalance: 650,
  },
  {
    name: 'Product 5',
    previousStock: 12,
    newStock: 900,
    sale: 700,
    remainingBalance: 1100,
  },
  {
    name: 'Product 6',
    previousStock: 18,
    newStock: 750,
    sale: 550,
    remainingBalance: 1200,
  },
  {
    name: 'Product 7',
    previousStock: 7,
    newStock: 400,
    sale: 320,
    remainingBalance: 480,
  },
  {
    name: 'Product 8',
    previousStock: 14,
    newStock: 950,
    sale: 800,
    remainingBalance: 1100,
  },
  {
    name: 'Product 9',
    previousStock: 22,
    newStock: 850,
    sale: 700,
    remainingBalance: 1270,
  },
  {
    name: 'Product 10',
    previousStock: 6,
    newStock: 300,
    sale: 250,
    remainingBalance: 350,
  },
];

const ProductsScreen = () => {
  return (
    <Box>
      <SearchBar />

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
          <Heading fontSize={'20px'} fontWeight={700} fontFamily={'lato'}>
            Products List
          </Heading>
          <Table variant="striped" colorScheme="customColorScheme" mt={'20px'}>
            <Thead>
              <Tr>
                <Th color={'#A0AEC0'}>Name</Th>
                <Th color={'#A0AEC0'}>Previous Stock</Th>
                <Th color={'#A0AEC0'}>New Stock</Th>
                <Th color={'#A0AEC0'}>Total</Th>
                <Th color={'#A0AEC0'}>Sale</Th>
                <Th color={'#A0AEC0'}>Remaining Balance</Th>
                <Th color={'#A0AEC0'}>Edit</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((item, index) => (
                <>
                  <Tr key={index}>
                    <Td>
                      <HStack spacing={'20px'}>
                        <VStack align={'flex-start'}>
                          <div>{item.name}</div>
                        </VStack>
                      </HStack>
                    </Td>

                    <Td>{item.previousStock}</Td>
                    <Td>{item.newStock}</Td>
                    <Td>{item.previousStock + item.newStock}</Td>
                    <Td>{item.sale}</Td>
                    <Td>Rs. {item.remainingBalance}</Td>
                    <Td>
                      <FaEdit />{' '}
                    </Td>
                  </Tr>
                </>
              ))}
            </Tbody>
          </Table>{' '}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductsScreen;
