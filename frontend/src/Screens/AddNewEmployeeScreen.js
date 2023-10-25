import React, { useState } from 'react';
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
const AddNewEmployeeScreen = () => {
  const [createproductSuccess, setCreateProductSuccess] = useState(false);

  // const {
  //   error: createEmployeeError,
  //   loading: createEmployeeLoading,
  //   success: createEmployeeSuccess,
  //   product: createdEmployee,
  // } = useSelector(store => store.employeeCreate);

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

  return <div>AddNewEmployeeScreen</div>;
};

export default AddNewEmployeeScreen;
