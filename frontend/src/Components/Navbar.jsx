import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { ChevronRightIcon, ChevronDownIcon,DownloadIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Design_ideas from "./menuOpt/Design_ideas";
import Cities from "./menuOpt/Cities";
import Magazine from "./menuOpt/Magazine";
import More from "./menuOpt/More";
import { CgProfile } from "react-icons/cg";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import Offering from "./menuOpt/Offering";
import Price from "./menuOpt/Price";



function Navbar() {
  return (
    <>
      <Box p={"12px"} bg={"#5e455a"}>
        <Text color={"white"} fontSize={"18px"}>
          {" "}
          Our website uses cookies.{" "}
          <Link style={{ color: "red" }}>
            {" "}
            Learn more <ChevronRightIcon />{" "}
          </Link>{" "}
        </Text>
      </Box>

      <Box p={"15px"}>
      <Flex align={"center"} justifyContent={"space-around"}>
        <Flex align={"center"} fontWeight={"bold"} gap={"15px"}>
          <Link>
            <Image
              m={"5px"}
              p={"10px"}
              width={"70%"}
              height={"70%"}
              src={"https://bonito.in/wp-content/themes/bonito-cms/assets/new-images/logo.svg"}
            />
          </Link>
          <Link>Interiors</Link>
          <Link>Store</Link>
          <Link>
            {" "}
            <Design_ideas />{" "}
          </Link>
          <Link>
            {" "}
            <Magazine />{" "}
          </Link>
          <Link>
            {" "}
            <Cities />{" "}
          </Link>
          <Link>Visit Us</Link>
          <Link>
            {" "}
            <More />{" "}
          </Link>
        </Flex>
        <Box>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <CgProfile fontSize={"20px"}/>
            </MenuButton>
            <MenuList>
             <Box p={"5px"} m={"5px"}>
             <Center>
              <Button color={"red"} width={"95%"} border={"2px solid red"} borderRadius={'20px'} textAlign={"center"}>
               <CgProfile fontSize={"15px"}/> Login/SignUp
               </Button>
              </Center>
             </Box>
             <Box width={"400px"}>
              <Text p={"5px"}> <DownloadIcon/> Explore our mobile app</Text>
              <Flex width={"100%"}>
              <Image p={"5px"} width={"50%"} src="https://d3gq2merok8n5r.cloudfront.net/play-store-1663167874-52PHa.png"/>
              <Image p={"5px"} width={"50%"} src="https://d3gq2merok8n5r.cloudfront.net/store-badges-1663167618-cP16A/app-store-1663167801-pqWsv.png"/>
              </Flex>
             </Box>
            </MenuList>
          </Menu>
        </Box>
        </Flex>
      </Box>
      <hr></hr>

      <Box p={"7px"}>
      <Flex align={"center"} justifyContent={"space-around"}>
         <Flex gap={"20px"} fontWeight={"bold"}>
          <Link>How it works</Link>
          <Link> <Offering/> </Link>
          <Link> <Price/> </Link>
          <Link>The Modular Journey</Link>
          <Link>Refer a Friend</Link>
          <Link>Partner with us</Link>
         </Flex>
         <Box>
          <Button width={"100%"} borderRadius={"30px"} bg={"#eb595f"} fontSize={"12px"}>CONSULT ONLINE NOW</Button>
         </Box>
        </Flex>
      </Box>
      <hr></hr>
    </>
  );
}

export default Navbar;
