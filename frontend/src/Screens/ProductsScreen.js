import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Icon,
  Input,
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
import React, { useState } from 'react';
import { FaCheck, FaEdit, FaPlus, FaTimes } from 'react-icons/fa'; // Import the FaEdit icon
import SearchBar from '../Components/SearchBar';
import { AiOutlineUser } from 'react-icons/ai';

const products = [
  {
    _id: '1',
    name: 'Product 1',
    previousStock: 10,
    newStock: 500,
    sale: 400,
    remainingBalance: 600,
    price: 100,
  },
  {
    _id: '2',
    name: 'Product 2',
    previousStock: 15,
    newStock: 700,
    sale: 500,
    remainingBalance: 700,
    price: 200,
  },
  {
    _id: '3',
    name: 'Product 3',
    previousStock: 20,
    newStock: 800,
    sale: 600,
    remainingBalance: 900,
    price: 150,
  },
  {
    _id: '4',
    name: 'Product 4',
    previousStock: 8,
    newStock: 600,
    sale: 350,
    remainingBalance: 650,
    price: 300,
  },
  {
    _id: '5',
    name: 'Product 5',
    previousStock: 12,
    newStock: 900,
    sale: 700,
    remainingBalance: 1100,
    price: 250,
  },
  {
    _id: '6',
    name: 'Product 6',
    previousStock: 18,
    newStock: 750,
    sale: 550,
    remainingBalance: 1200,
    price: 180,
  },
  {
    _id: '7',
    name: 'Product 7',
    previousStock: 7,
    newStock: 400,
    sale: 320,
    remainingBalance: 480,
    price: 210,
  },
  {
    _id: '8',
    name: 'Product 8',
    previousStock: 14,
    newStock: 950,
    sale: 800,
    remainingBalance: 1100,
    price: 280,
  },
  {
    _id: '9',
    name: 'Product 9',
    previousStock: 22,
    newStock: 850,
    sale: 700,
    remainingBalance: 1270,
    price: 170,
  },
  {
    _id: '10',
    name: 'Product 10',
    previousStock: 6,
    newStock: 300,
    sale: 250,
    remainingBalance: 350,
    price: 350,
  },
];

const ProductsScreen = () => {
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleEdit = id => {
    setEditMode(true);
    setEditId(id);
  };

  const handleCancel = () => {
    setEditMode(false);
  };
  const handleSubmit = () => {
    console.log('handle submit');
  };
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
          <HStack spacing={'800px'}>
            <Heading fontSize={'20px'} fontWeight={700} fontFamily={'lato'}>
              Products List
            </Heading>

            <Button
              bg={'#3182ce'}
              color={'white'}
              _hover={{ bg: '#2D75B7' }}
              _active={{ bg: '#2D75B7' }}
            >
              {' '}
              <Icon as={FaPlus} fontSize={'14px'} />
              <Box p={'3px'}> Add New Product</Box>
            </Button>
          </HStack>
          <Table variant="striped" colorScheme="customColorScheme" mt={'20px'}>
            <Thead>
              <Tr>
                <Th color={'#A0AEC0'}>Name</Th>
                <Th color={'#A0AEC0'}>Previous Stock</Th>
                <Th color={'#A0AEC0'}>New Stock</Th>
                <Th color={'#A0AEC0'}>Total</Th>
                <Th color={'#A0AEC0'}>Sale</Th>
                <Th color={'#A0AEC0'}>Remaining Balance</Th>
                <Th color={'#A0AEC0'}>Price</Th>
                <Th color={'#A0AEC0'}>Edit</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((item, index) => (
                <>
                  <Tr key={index} height={'80px'}>
                    <Td>
                      {editMode && editId === item._id ? (
                        <Input
                          size={'sm'}
                          width={item.name.length * 8 + 'px'} // Adjust the width based on content
                          value={item.name}
                        />
                      ) : (
                        <div>{item.name}</div>
                      )}
                    </Td>

                    <Td>
                      {' '}
                      {editMode && editId === item._id ? (
                        <Input
                          size={'sm'}
                          width={item.name.length * 8 + 'px'}
                          value={item.previousStock}
                        />
                      ) : (
                        <div>{item.previousStock}</div>
                      )}
                    </Td>
                    <Td>
                      {' '}
                      {editMode && editId === item._id ? (
                        <Input
                          size={'sm'}
                          width={item.name.length * 8 + 'px'}
                          value={item.newStock}
                        />
                      ) : (
                        <div>{item.newStock}</div>
                      )}
                    </Td>
                    <Td>{item.previousStock + item.newStock}</Td>
                    <Td>
                      {' '}
                      {editMode && editId === item._id ? (
                        <Input
                          size={'sm'}
                          width={item.name.length * 8 + 'px'}
                          value={item.sale}
                        />
                      ) : (
                        <div>{item.sale}</div>
                      )}
                    </Td>
                    <Td>
                      {' '}
                      {editMode && editId === item._id ? (
                        <Input
                          size={'sm'}
                          width={item.name.length * 8 + 'px'}
                          value={item.remainingBalance}
                        />
                      ) : (
                        <div>Rs. {item.remainingBalance}</div>
                      )}
                    </Td>
                    <Td>
                      {' '}
                      {editMode && editId === item._id ? (
                        <Input
                          size={'sm'}
                          width={item.name.length * 8 + 'px'}
                          value={item.price}
                        />
                      ) : (
                        <div>Rs. {item.price}</div>
                      )}
                    </Td>
                    <Td>
                      {editMode && editId === item._id ? (
                        <HStack>
                          <FaTimes
                            color="red"
                            _hover={{ cursor: 'pointer' }}
                            onClick={handleCancel}
                          />
                          <FaCheck color="green" onClick={handleSubmit} />
                        </HStack>
                      ) : (
                        <FaEdit
                          _hover={{ cursor: 'pointer !important' }}
                          onClick={() => handleEdit(item._id)}
                        />
                      )}
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
