import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

function Trending() {
  return <Box height={"auto"} >
      <Box   m={"auto"} p={"40px"} >
      <Heading >Stay updated with trending home interior designs!</Heading>
       <Text>Find everything from design fixes to expert tips on Livspace magazine</Text>
      <Flex justifyContent={"space-evenly"} gap={"30px"}>
      <Box width={"40%"}>
        <Image  src="https://images.livspace-cdn.com/w:1920/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2023/07/18162846/cleo-county-noida-3bhk-homeowners.jpg"/>
        <Text fontWeight={"bold"}>
        Designed Only Under ₹11 Lakhs, This Home in Cleo County, Noida Is Minimal and Amazing
        </Text>
        <Text> Somreeta Sarkar | July 18, 2023 </Text>
      </Box>
      <Box width={"40%"}>
        <Image  src="https://images.livspace-cdn.com/w:1920/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2023/07/19000213/rustic-interior-design.jpg"/>
        <Text fontWeight={"bold"}>
        Designed Only Under ₹11 Lakhs, This Home in Cleo County, Noida Is Minimal and Amazing
        </Text>
        <Text> Somreeta Sarkar | July 18, 2023 </Text>
      </Box>
      <Box width={"40%"}>
        <Image  src="https://images.livspace-cdn.com/w:1920/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2023/07/15003746/wooden-panels.jpg"/>
        <Text fontWeight={"bold"}>
        Designed Only Under ₹11 Lakhs, This Home in Cleo County, Noida Is Minimal and Amazing
        </Text>
        <Text> Somreeta Sarkar | July 18, 2023 </Text>
      </Box>
      </Flex>
      </Box>
  </Box>;
}

export default Trending;
