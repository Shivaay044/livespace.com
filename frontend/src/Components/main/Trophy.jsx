import React from "react";
import TrophyCarousel from "../Carousel/TrophyCarousel";
import { Box, Heading } from "@chakra-ui/react";

function Trophy() {
  return<Box bg={"rgba(44,37,45,.04);"}>
         <Box  width={"80%"}  height={"250px"} p={"15px"} m={"auto"}>
  <Heading p={"5px"}>Our trophy cabinet</Heading>
    <TrophyCarousel/>
  </Box>
  </Box>;
}

export default Trophy;
