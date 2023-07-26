import React, { useState } from 'react';
import { Box, Flex, Menu, MenuButton, MenuList, MenuItem, SimpleGrid, useDisclosure, Image, Text } from '@chakra-ui/react';
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons"

const Price = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

  
    const handleMouseEnter = () => {
      onOpen();
    };
  
    const handleMouseLeave = () => {
      onClose();
    };
  
    const handleOptionSelect = (option) => () => {
      console.log(`Selected: ${option}`);
    };
  
    return (
      <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Menu isOpen={isOpen} onClose={onClose}>
          <MenuButton as={Flex} alignItems="center" cursor="pointer">
            Price Calculators
            {isOpen ? <ChevronUpIcon ml={2} /> : <ChevronDownIcon ml={2} />}
          </MenuButton>
          <MenuList>
           <MenuItem>Home Interior Price Calculator</MenuItem>
           <MenuItem>Kitchen Price Calculator</MenuItem>
           <MenuItem>Wardroabs Price Calculator</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    );
  };
  


export default Price;
