import React, { useState } from 'react';
import { Box, Flex, Menu, MenuButton, MenuList, MenuItem, SimpleGrid, useDisclosure, Image, Text } from '@chakra-ui/react';
import {ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons"

const Offering = () => {
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
            Offering
            {isOpen ? <ChevronUpIcon ml={2} /> : <ChevronDownIcon ml={2} />}
          </MenuButton>
          <MenuList>
           
           <SimpleGrid alignItems={"center"} gap={"30px"} row={"3"} columns={"3"}>
              <Box>
                <Text fontWeight={"300"}>Explore Offerings</Text>
                <Box  m={"10px"} >
                  <Flex p={"10px"} borderRadius={"8px"} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
                      <Image borderRadius={"8px"} src="https://images.livspace-cdn.com/w:96/h:60/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/offerings-1615197161-iCUAJ/nav-banner-1615197187-vJYr6/desktop-1615197244-WYKns/type-a-offering-banner-d-v1-1615197203-RMXG0.jpg"/>
                      <Box>
                        <Text fontSize={"1xl"}>Modular Interiors</Text>
                        <Text fontSize={"10px"} fontWeight={"600"}>Kitchen,woadroabs and storage</Text>
                      </Box>
                  </Flex>
              </Box>
              <Box m={"10px"} >
                  <Flex p={"10px"} borderRadius={"8px"} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
                      <Image borderRadius={"8px"} src="https://images.livspace-cdn.com/w:96/h:60/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/offerings-1615197161-iCUAJ/nav-banner-1615197187-vJYr6/desktop-1615197244-WYKns/type-a-offering-banner-d-v1-1615197203-RMXG0.jpg"/>
                      <Box>
                        <Text fontSize={"1xl"}>Modular Interiors</Text>
                        <Text fontSize={"10px"} fontWeight={"600"}>Kitchen,woadroabs and storage</Text>
                      </Box>
                  </Flex>
              </Box>
              <Box  m={"10px"} >
                  <Flex borderRadius={"8px"} p={"10px"} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
                      <Image borderRadius={"8px"} src="https://images.livspace-cdn.com/w:96/h:60/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/offerings-1615197161-iCUAJ/nav-banner-1615197187-vJYr6/desktop-1615197244-WYKns/type-a-offering-banner-d-v1-1615197203-RMXG0.jpg"/>
                      <Box>
                        <Text fontSize={"1xl"}>Modular Interiors</Text>
                        <Text fontSize={"10px"} fontWeight={"600"}>Kitchen,woadroabs and storage</Text>
                      </Box>
                  </Flex>
              </Box>
              </Box>
              <Box>
              <Text fontWeight={"300"}>KITCHEN</Text>
              <MenuItem>Know Your Kitchen</MenuItem>
              <MenuItem>Kitchen Price Calculator</MenuItem>
              <MenuItem>Kitchen Components</MenuItem>
              </Box>
              <Box>
              <Text fontWeight={"300"}>WARDROVE</Text>
              <MenuItem>Know Your Kitchen</MenuItem>
              <MenuItem>Kitchen Price Calculator</MenuItem>
              <MenuItem>Kitchen Components</MenuItem>
              </Box>
           </SimpleGrid>
          </MenuList>
        </Menu>
      </Box>
    );
  };
  


export default Offering;
