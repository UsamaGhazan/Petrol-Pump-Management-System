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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Alert,
  AlertDescription,
  AlertIcon,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaCheck, FaEdit, FaPlus, FaTimes, FaTrash } from 'react-icons/fa'; // Import the FaEdit icon
import SearchBar from '../Components/SearchBar';
import { getEmployeeList } from '../Features/employeeListSlice';
import { useSelector, useDispatch } from 'react-redux';
import { updateProduct } from '../Features/productUpdateSlice';
import { deleteProduct } from '../Features/productDeleteSlice';
import { PRODUCT_LIST_RESET } from '../Features/productsListSlice';
import { createProduct } from '../Features/productCreateSlice';
import { PRODUCT_CREATE_RESET } from '../Features/productCreateSlice';
import { PRODUCT_UPDATE_RESET } from '../Features/productUpdateSlice';

const ProductsScreen = () => {
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editedValues, setEditedValues] = useState({}); // Store edited values here
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [successAlert, setSuccessAlert] = useState(false);
  const [createproductSuccess, setCreateProductSuccess] = useState(false);
  const dispatch = useDispatch();
  const { error, loading, employees } = useSelector(
    store => store.employeesList
  );
  const {
    error: deleteError,
    loading: deleteLoading,
    success: deleteSuccess,
  } = useSelector(store => store.employeeDelete);

  // const {
  //   error: createEmployeeError,
  //   loading: createEmployeeLoading,
  //   success: createEmployeeSuccess,
  //   product: createdEmployee,
  // } = useSelector(store => store.employeeCreate);

  useEffect(() => {
    dispatch(getEmployeeList());
  }, [dispatch]);

  

  


  

  // const handleDelete = () => {
  //   dispatch(deleteProduct(editId));
  //   dispatch(PRODUCT_LIST_RESET(editId));
  //   onClose();
  // };
  // const handleModal = id => {
  //   onOpen();
  //   setEditId(id);
  // };

  // useEffect(() => {
  //   if (success) {
  //     setSuccessAlert(true);

  //     const timeout = setTimeout(() => {
  //       setSuccessAlert(false);
  //       dispatch(PRODUCT_UPDATE_RESET());
  //     }, 3000);

      // Cleanup the timeout when the component unmounts or when the alert is hidden
  //     return () => clearTimeout(timeout);
  //   } else {
      // Set successAlert to false if success becomes false
  //     setSuccessAlert(false);
  //   }
  // }, [success]);
  // useEffect(() => {
  //   if (createProductSuccess) {
  //     setSuccessAlert(true);

  //     const timeout = setTimeout(() => {
  //       setSuccessAlert(false);
  //       dispatch(PRODUCT_CREATE_RESET());
  //     }, 3000);

      // Cleanup the timeout when the component unmounts or when the alert is hidden
  //     return () => clearTimeout(timeout);
  //   } else {
      // Set successAlert to false if success becomes false
  //     setSuccessAlert(false);
  //   }
  // }, [createProductSuccess, dispatch]);

  

  return (
    <Box>
      <div className="alert-overlay">
        {(successAlert || createProductSuccess) && (
          <Alert
            ml="388px"
            status="info"
            className={
              success || createProductSuccess ? 'fade-in-slide-down' : ''
            }
          >
            <AlertIcon />
            <AlertDescription>
              {success ? 'Product Updated' : 'New Product Added'}
            </AlertDescription>
          </Alert>
        )}
      </div>
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
              isLoading={createProductLoading}
              loadingText="Adding..."
              bg={'#3182ce'}
              color={'white'}
              _hover={{ bg: '#2D75B7' }}
              _active={{ bg: '#2D75B7' }}
              onClick={handleCreateProduct}
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
                <Th color={'#A0AEC0'}>Role</Th>
                <Th color={'#A0AEC0'}>Employed</Th>
                <Th color={'#A0AEC0'}>Edit/Delete</Th>
              </Tr>
            </Thead>{' '}
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
                      <VStack alignItems={'flex-start'}>
                        <Box fontWeight={'700'}>{item.name}</Box>
                        <Box fontSize={'14px'}>{item.email}</Box>
                      </VStack>
                    </Td>{' '}
                    */
                    <Td fontWeight={'500'}>{item.role}</Td>
                    <Td fontWeight={'500'}>{item.employed}</Td>
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
                        <HStack>
                          <Box _hover={{ cursor: 'pointer ' }}>
                            <FaEdit onClick={() => handleEdit(item._id)} />
                          </Box>

                          <Box _hover={{ cursor: 'pointer ' }}>
                            <FaTrash onClick={() => handleModal(item._id)} />
                          </Box>
                        </HStack>
                      )}
                    </Td>
                  </Tr>
                ))
              )}
            </Tbody>
          </Table>{' '}
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Are you sure you want to delete this product?
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack ml={'125px'}>
              <Button
                color={'white'}
                _hover={{ bg: '#2D75B7' }}
                _active={{ bg: '#2D75B7' }}
                bg={'#3182ce'}
                width={'80px'}
                onClick={handleDelete}
              >
                {deleteLoading ? <Spinner /> : <Box>Yes</Box>}
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductsScreen;
