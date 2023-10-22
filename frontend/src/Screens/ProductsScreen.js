import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Input,
  Menu,
  MenuButton,
  Spinner,
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
import { updateProduct } from '../Features/productUpdateSlice';

const ProductsScreen = () => {
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editedValues, setEditedValues] = useState({}); // Store edited values here
  console.log(editedValues);
  const dispatch = useDispatch();
  const { error, loading, products } = useSelector(store => store.productList);
  const {
    error: updateError,
    loading: updateLoading,
    product: updatedProduct,
    success,
  } = useSelector(store => store.productList);

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  const handleEdit = id => {
    setEditMode(true);
    setEditId(id);

    // Initialize editedValues with the current values from the selected item
    const selectedItem = products.find(item => item._id === id);
    setEditedValues({
      name: selectedItem.name,
      previousStock: selectedItem.previousStock,
      newStock: selectedItem.newStock,
      sale: selectedItem.sale,
      remainingBalance: selectedItem.remainingBalance,
      price: selectedItem.price,
    });
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditId(null);
  };

  const handleSubmit = () => {
    console.log(editedValues);
    setEditMode(false);
    dispatch(
      updateProduct({
        id: editId,
        name: editedValues.name,
        previousStock: editedValues.previousStock,
        newStock: editedValues.newStock,
        sale: editedValues.sale,
        remainingBalance: editedValues.remainingBalance,
        price: editedValues.price,
      })
    );
    setEditId(null);
  };

  const handleInputChange = (key, value) => {
    if (key !== 'name' && typeof value === 'string' && value !== '') {
      value = parseInt(value);
    }

    setEditedValues(prevValues => ({
      ...prevValues,
      [key]: value,
    }));
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
              {loading ? (
                <Tr height="80px">
                  <Td colSpan={8}>
                    <Flex
                      justifyContent="center"
                      alignItems="center"
                      height="100%"
                    >
                      <Spinner color="white" />
                    </Flex>
                  </Td>
                </Tr>
              ) : (
                products.map((item, index) => (
                  <Tr key={index} height={'80px'}>
                    <Td>
                      {editMode && editId === item._id ? (
                        <Input
                          size={'sm'}
                          value={editedValues.name}
                          borderColor={'#dc916e'}
                          focusBorderColor={'#dc916e'}
                          onChange={e =>
                            handleInputChange('name', e.target.value)
                          }
                        />
                      ) : (
                        <Box>{item.name}</Box>
                      )}
                    </Td>
                    <Td>
                      {' '}
                      {editMode && editId === item._id ? (
                        <Input
                          type="number"
                          size={'sm'}
                          value={editedValues.previousStock}
                          borderColor={'#dc916e'}
                          focusBorderColor={'#dc916e'}
                          onChange={e =>
                            handleInputChange('previousStock', e.target.value)
                          }
                        />
                      ) : (
                        <Box>{item.previousStock}</Box>
                      )}
                    </Td>
                    <Td>
                      {' '}
                      {editMode && editId === item._id ? (
                        <Input
                          type="number"
                          size={'sm'}
                          value={editedValues.newStock}
                          borderColor={'#dc916e'}
                          focusBorderColor={'#dc916e'}
                          onChange={e =>
                            handleInputChange('newStock', e.target.value)
                          }
                        />
                      ) : (
                        <Box>{item.newStock}</Box>
                      )}
                    </Td>
                    <Td>{item.previousStock + item.newStock}</Td>
                    <Td>
                      {' '}
                      {editMode && editId === item._id ? (
                        <Input
                          type="number"
                          size={'sm'}
                          value={editedValues.sale}
                          borderColor={'#dc916e'}
                          focusBorderColor={'#dc916e'}
                          onChange={e =>
                            handleInputChange('sale', e.target.value)
                          }
                        />
                      ) : (
                        <Box>{item.sale}</Box>
                      )}
                    </Td>
                    <Td>
                      {' '}
                      {editMode && editId === item._id ? (
                        <Input
                          type="number"
                          size={'sm'}
                          value={editedValues.remainingBalance}
                          borderColor={'#dc916e'}
                          focusBorderColor={'#dc916e'}
                          onChange={e =>
                            handleInputChange(
                              'remainingBalance',
                              e.target.value
                            )
                          }
                        />
                      ) : (
                        <Box>Rs. {item.remainingBalance}</Box>
                      )}
                    </Td>
                    <Td>
                      {' '}
                      {editMode && editId === item._id ? (
                        <Input
                          type="number"
                          size={'sm'}
                          value={editedValues.price}
                          borderColor={'#dc916e'}
                          focusBorderColor={'#dc916e'}
                          onChange={e =>
                            handleInputChange('price', e.target.value)
                          }
                        />
                      ) : (
                        <Box>Rs. {item.price}</Box>
                      )}
                    </Td>
                    <Td>
                      {editMode && editId === item._id ? (
                        <HStack>
                          <Box _hover={{ cursor: 'pointer !important' }}>
                            <FaTimes
                              color="red"
                              _hover={{ cursor: 'pointer' }}
                              onClick={handleCancel}
                            />
                          </Box>
                          <Box _hover={{ cursor: 'pointer ' }}>
                            <FaCheck color="green" onClick={handleSubmit} />
                          </Box>
                        </HStack>
                      ) : (
                        <Box _hover={{ cursor: 'pointer ' }}>
                          <FaEdit onClick={() => handleEdit(item._id)} />
                        </Box>
                      )}
                    </Td>
                  </Tr>
                ))
              )}
            </Tbody>
          </Table>{' '}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductsScreen;
