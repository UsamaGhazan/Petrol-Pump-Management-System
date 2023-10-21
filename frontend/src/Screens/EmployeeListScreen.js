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

const employees = [
  {
    name: 'Johnny Harvard',
    email: 'johhny@yahoo.com',
    employed: '14/06/2021',
    role: 'Manager',
  },
  {
    name: 'Alice Johnson',
    email: 'alice@gmail.com',
    employed: '02/03/2022',
    role: 'Cashier',
  },
  {
    name: 'Robert Smith',
    email: 'robert@hotmail.com',
    employed: '11/12/2020',
    role: 'Attendant',
  },
  {
    name: 'Ella Williams',
    email: 'ella@gmail.com',
    employed: '30/09/2021',
    role: 'Attendant',
  },
  {
    name: 'Michael Davis',
    email: 'michael@yahoo.com',
    employed: '08/04/2022',
    role: 'Cashier',
  },
  {
    name: 'Sophia Anderson',
    email: 'sophia@gmail.com',
    employed: '19/11/2021',
    role: 'Attendant',
  },
  {
    name: 'David Martin',
    email: 'david@hotmail.com',
    employed: '03/07/2020',
    role: 'Manager',
  },
  {
    name: 'Olivia Wilson',
    email: 'olivia@gmail.com',
    employed: '27/05/2022',
    role: 'Attendant',
  },
  {
    name: 'James Lee',
    email: 'james@yahoo.com',
    employed: '14/01/2022',
    role: 'Cashier',
  },
  {
    name: 'Ava White',
    email: 'ava@hotmail.com',
    employed: '10/10/2021',
    role: 'Attendant',
  },
];

const EmployeeListScreen = () => {
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
            Employee List
          </Heading>
          <Table variant="striped" colorScheme="customColorScheme" mt={'20px'}>
            <Thead>
              <Tr>
                <Th color={'#A0AEC0'}>Name</Th>
                <Th color={'#A0AEC0'}>Role</Th>
                <Th color={'#A0AEC0'}>Employed</Th>
                <Th color={'#A0AEC0'}>Edit</Th>
              </Tr>
            </Thead>
            <Tbody>
              {employees.map((item, index) => (
                <>
                  <Tr key={index}>
                    <Td>
                      <VStack alignItems={'flex-start'}>
                        <Box fontWeight={'700'}>{item.name}</Box>
                        <Box fontSize={'14px'}>{item.email}</Box>
                      </VStack>
                    </Td>

                    <Td fontWeight={'500'}>{item.role}</Td>
                    <Td>{item.employed}</Td>

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

export default EmployeeListScreen;
