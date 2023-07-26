import React, { useState } from 'react';
import { Box, Flex, Menu, MenuButton, MenuList, MenuItem, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons"

const More = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const options = [
      'Modular Kitchen Design',
      'Dinning Room Designs',
      'Option 3',
      'Option 4',
      'Option 5',
      'Option 6',
      'Option 7',
      'Option 8',
      'Option 9',
      'Option 10',
      'Option 11',
      'Option 12',
      'Option 13',
      'Option 14',
      'Option 15',
      'Option 16',
      'Option 17',
      'Option 18',
      'Option 19',
      'Option 20'
    ];
  
    const numColumns = Math.ceil(options.length / 10);
  
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
            More
            {isOpen ? <ChevronUpIcon ml={2} /> : <ChevronDownIcon ml={2} />}
          </MenuButton>
          <MenuList>
            <SimpleGrid columns={numColumns} spacing={1} p={2}>
              {options.map((option, index) => (
                <MenuItem key={index} onClick={handleOptionSelect(option)}>
                  {option}
                </MenuItem>
              ))}
            </SimpleGrid>
          </MenuList>
        </Menu>
      </Box>
    );
  };
  


export default More;
