import {
  Avatar,
  AvatarBadge,
  Box,
  HStack,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const data = [
  {
    author: {
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
    function: {
      title: 'Developer',
      subtitle: 'Programmer',
    },
    status: 'Online',
    employed: '2022-01-15 to Present',
  },
];

const EmployeeListScreen = () => {
  return (
    <Box>
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
            Employees List
          </Heading>
          <Table variant="striped" colorScheme="teal" mt={'20px'}>
            <Thead>
              <Tr>
                <Th color={'#A0AEC0'}>Author</Th>
                <Th color={'#A0AEC0'}>Function</Th>
                <Th color={'#A0AEC0'}>Status</Th>
                <Th color={'#A0AEC0'}>Employed</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item, index) => (
                <Tr key={index}>
                  <Td>
                    <HStack spacing={'20px'}>
                      <Avatar name={item.author.name} src="avatar-url"></Avatar>
                      <VStack align={'flex-start'}>
                        <div>{item.author.name}</div>
                        <div>{item.author.email}</div>
                      </VStack>
                    </HStack>
                  </Td>
                  <Td>
                    <div>{item.function.title}</div>
                    <div>{item.function.subtitle}</div>
                  </Td>
                  <Td>{item.status}</Td>
                  <Td>{item.employed}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>{' '}
        </Box>
      </Box>
    </Box>
  );
};

export default EmployeeListScreen;
