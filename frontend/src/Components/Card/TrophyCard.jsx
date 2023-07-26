import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function TrophyCard({el:{image,desc}}) {
  return <Box m={"5px"} bg={"white"}  p={"10px"} borderRadius={"15px"}   boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" >
         <Flex flexDirection={"column"} align={"center"}>
          <Image width={"50%"} height={"auto"} src={image}/>
          <Text>{desc}</Text>
         </Flex>
  </Box>;
}

export default TrophyCard;
