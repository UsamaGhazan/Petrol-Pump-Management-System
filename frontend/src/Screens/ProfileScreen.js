import React, { useState } from 'react';
import { Box, Button, Text, Input } from '@chakra-ui/react';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    password: '********', // For security, password is not shown by default
    role: 'Employee',
    employmentDate: '2022-01-01',
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setEmployeeDetails({ ...employeeDetails, [name]: value });
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
      p={8}
    >
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Employee Profile
      </Text>
      <Text>Name:</Text>
      <Input
        value={employeeDetails.name}
        name="name"
        onChange={handleInputChange}
        isReadOnly={!isEditing}
        mb={4}
      />
      <Text>Email:</Text>
      <Input
        value={employeeDetails.email}
        name="email"
        onChange={handleInputChange}
        isReadOnly={!isEditing}
        mb={4}
      />
      <Text>Password:</Text>
      <Input
        value={employeeDetails.password}
        name="password"
        type="password"
        onChange={handleInputChange}
        isReadOnly={!isEditing}
        mb={4}
      />
      <Text>Role:</Text>
      <Input
        value={employeeDetails.role}
        name="role"
        onChange={handleInputChange}
        isReadOnly={!isEditing}
        mb={4}
      />
      <Text>Employment Date:</Text>
      <Input
        value={employeeDetails.employmentDate}
        name="employmentDate"
        onChange={handleInputChange}
        isReadOnly={!isEditing}
        mb={4}
      />

      <Button onClick={handleEditClick} mt={4}>
        {isEditing ? 'Save' : 'Edit'}
      </Button>
    </Box>
  );
};

export default ProfilePage;
