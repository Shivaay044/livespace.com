import { Box, Center, Image } from "@chakra-ui/react";
import React from "react";

function NewCard({el}) {
    console.log(el)
  return <Center p={"5px"} m={'12px'} borderRadius={"10px"} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
    <Image width={"60%"} src={el}/>
  </Center>;
}

export default NewCard;
