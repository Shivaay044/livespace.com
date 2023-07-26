import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import NewCarousel from "../Carousel/NewCarousel";

function New() {
  return <>
  <hr></hr>
    <Box width={"80%"} m={"auto"} p={"10px"}>
        <Heading p={"4px"}>In the news</Heading>
        <NewCarousel/>
    </Box>
  <hr></hr>
  </>;
}

export default New;
