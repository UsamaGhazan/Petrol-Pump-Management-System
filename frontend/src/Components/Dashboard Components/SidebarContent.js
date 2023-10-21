import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  CloseButton,
  Icon,
  useColorModeValue,
  Image,
  Menu,
  MenuButton,
  HStack,
} from '@chakra-ui/react';
import {
  FiSettings,
  FiBarChart2,
  FiCalendar,
  FiDollarSign,
  FiMessageSquare,
} from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';

import NavItem from './NavItem';
import { useNavigate } from 'react-router-dom';
import {
  FaDollarSign,
  FaGasPump,
  FaHome,
  FaShoppingCart,
  FaUserPlus,
  FaUsers,
} from 'react-icons/fa';
import Breadcrumb from './BreadCrumb';

const LinkItems = [
  { name: 'Dashboard', icon: FaHome, to: '/' },
  { name: 'Products', icon: FaShoppingCart, to: '/products' },
  { name: 'Employees List', icon: FaUsers, to: '/employees' },
  { name: 'Add New Employee', icon: FaUserPlus, to: '/addEmployee' },
  { name: 'Petroleum Products', icon: FaGasPump, to: '/petroleumProducts' },
  { name: 'Set Product Prices', icon: FaDollarSign, to: '/setPrices' },
];

const SidebarContent = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState('/');
  const [pageName, setPageName] = useState('Dashboard');
  return (
    <>
      <Box>
        <Image
          src={require('../../assets/images/admin-background.png')}
          alt="logo"
          position={'absolute'}
          width="full"
          zIndex={'-1'}
        />
        <Box
          pos={'absolute'}
          border="2px solid white"
          _hover={{ cursor: 'pointer' }}
          right={'145px'}
          mt={'37px'}
        >
          <Menu>
            <MenuButton as={Box} p="5px">
              <HStack color={'white'}>
                <Icon as={AiOutlineUser} />
                <Box>Admin</Box>
              </HStack>
            </MenuButton>
          </Menu>
        </Box>
        <Box
          transition="3s ease"
          bg={useColorModeValue('white', 'gray.900')}
          border={'1px solid #E2E8F0'}
          borderRadius={'15px'}
          w={260}
          pos="fixed"
          h="672px"
          ml={'16px'}
          mt={'16px'}
          fontFamily={'lato'}
          fontWeight={700}
          fontSize={'15px'}
        >
          <Flex
            h="20"
            alignItems="center"
            mx="8"
            justifyContent="space-between"
          >
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
                onClick={() => {
                  setPageName(link.name);
                  setActiveLink(link.to);
                  navigate(link.to);
                }}
              >
                {link.name}
              </NavItem>
            ))}
          </Box>
          <Box>
            <Image
              src={require('../../assets/images/SidebarHelpImage.png')}
              alt="logo"
              width="100px"
              mt={'180px'}
              ml={'75px'}
            />
          </Box>
        </Box>
      </Box>
      <Box
        pos={'absolute'}
        mt={'35px'}
        ml={'316px'}
        fontFamily={'lato'}
        color={'white'}
      >
        {activeLink && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            Pages /
            <Breadcrumb name={pageName} to={activeLink} />
          </div>
        )}
      </Box>
    </>
  );
};

export default SidebarContent;
