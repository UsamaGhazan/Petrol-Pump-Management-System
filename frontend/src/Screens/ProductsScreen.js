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
import React, { useEffect, useState } from 'react';
import { FaCheck, FaEdit, FaPlus, FaTimes } from 'react-icons/fa'; // Import the FaEdit icon
import SearchBar from '../Components/SearchBar';
import { AiOutlineUser } from 'react-icons/ai';
import { getProductList } from '../Features/productsListSlice';
import { useSelector, useDispatch } from 'react-redux';
import { get } from 'mongoose';

const ProductsScreen = () => {
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const dispatch = useDispatch();
  const { error, loading, products } = useSelector(store => store.productList);

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

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
              {products &&
                products.map((item, index) => (
                  <>
                    <Tr key={index} height={'80px'}>
                      <Td>
                        {editMode && editId === item._id ? (
                          <Input
                            size={'sm'}
                            width={item.name.length * 8 + 'px'} // Adjust the width based on content
                            value={item.name}
                            borderColor={'#dc916e'}
                            focusBorderColor={'#dc916e'}
                          />
                        ) : (
                          <div width={item.name.length * 8 + 'px'}>
                            {item.name}
                          </div>
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
                          <div width={item.name.length * 8 + 'px'}>
                            {item.previousStock}
                          </div>
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
                          <div width={item.name.length * 8 + 'px'}>
                            {item.newStock}
                          </div>
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
                          <div width={item.name.length * 8 + 'px'}>
                            {item.sale}
                          </div>
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
                          <div width={item.name.length * 8 + 'px'}>
                            Rs. {item.remainingBalance}
                          </div>
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
