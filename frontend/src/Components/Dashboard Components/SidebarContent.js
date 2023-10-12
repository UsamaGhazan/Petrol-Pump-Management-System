import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  CloseButton,
  Icon,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import {
  FiSettings,
  FiBarChart2,
  FiCalendar,
  FiDollarSign,
  FiMessageSquare,
} from 'react-icons/fi';

import NavItem from './NavItem';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaUsers } from 'react-icons/fa';

const LinkItems = [
  { name: 'Dashboard', icon: FaHome, to: '/' },
  { name: 'Products', icon: FaShoppingCart, to: '/products' },
  { name: 'Employees List', icon: FaUsers, to: '/employees' },
];

const SidebarContent = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Image
        src={require('../../assets/images/admin-background.png')}
        alt="logo"
        position={'absolute'}
        width="full"
        zIndex={'-1'}
      />
      <Box
        transition="3s ease"
        bg={useColorModeValue('white', 'gray.900')}
        border={'1px solid gray'}
        borderRadius={'15px'}
        w={260}
        pos="fixed"
        h="672px"
        ml={'16px'}
        mt={'16px'}
        fontFamily={'lato'}
        fontWeight={700}
      >
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Box>
            <Image
              src={require('../../assets/images/logo1.png')}
              alt="logo"
              width="150px"
              mt={'20px'}
            />
          </Box>
        </Flex>
        <Box mt={5}>
          {LinkItems.map(link => (
            <NavItem
              key={link.name}
              icon={link.icon}
              to={link.to}
              onClick={() => navigate(link.to)}
            >
              {link.name}
            </NavItem>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarContent;
