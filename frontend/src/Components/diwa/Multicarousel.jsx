import React, { useEffect, useState } from "react";
import styled from "styled-components";
import times from "lodash/times";
import Marquee from "react-marquee-slider";
import { withSize } from "react-sizeme";
import { nanoid } from "nanoid";
import FullWidth from "./FullWidth";
import { Box,Flex,Text } from "@chakra-ui/react";
import { BiSolidCity } from 'react-icons/bi';
import { BsGlobeAsiaAustralia } from 'react-icons/bs';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { AiFillCodepenSquare } from 'react-icons/ai';

const Photo = styled.img`
  width: ${(props) => props.scale * 368}px;
  height: ${(props) => props.scale * 200}px;
  border-radius: 4px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
  object-fit: cover;
  object-position: top;

  margin-left: ${(props) => (props.offset === "true" ? props.scale * 7 : props.scale * 87)}px;
  margin-right: ${(props) => (props.offset === "true" ? props.scale * 80 : 0)}px;
`;

const photos = [
 {logo:<BiSolidCity />,text:"40 +cites"},
 {logo:<BsGlobeAsiaAustralia /> ,text:"Country"},
 {logo:<BsFillCalendarDateFill />,text:"Calendar"},
 {logo:<BiSolidCity />,text:"cites"},
 {logo:<BiSolidCity />,text:"cites"},
 {logo:<AiFillCodepenSquare />,text:"Quality"},
 {logo:<BiSolidCity />,text:"cites"},
 {logo:<BiSolidCity />,text:"cites"},
 {logo:<BiSolidCity />,text:"cites"},
 {logo:<BiSolidCity />,text:"cites"},
 {logo:<BiSolidCity />,text:"cites"},
 {logo:<BiSolidCity />,text:"cites"}
];

const Multicarousel = ({ size }) => {
  const [key, setKey] = useState(nanoid());

  useEffect(() => {
    setKey(nanoid());
  }, [size, size.width]);

  let scale = 0.5;

  if (size && size.width > 800) {
    scale = 0.65;
  }

  if (size && size.width > 1100) {
    scale = 0.8;
  }

  if (size && size.width > 1400) {
    scale = 1;
  }

  return (
    <FullWidth>
      <div style={{ height: scale * 200 }}>
        <Marquee key={key} velocity={25}>
          {times(7, Number).map((id) => <Box mr="2"  w="300px" h="150px" textAlign={"center"}  boxShadow={"md"} >
           <Text    borderRadius="50%"      boxShadow="sm"  bg="gray.100"  w="40%" ml={{base:"40%",md:"30%"}}  fontSize={{base:"6xl",md:"8xl"}} >{photos[id].logo}</Text>
            <Text>{photos[id].text}</Text>
            </Box>)}
        </Marquee>
      </div>

      <div style={{ height: scale * 60 }} />

      
    </FullWidth>
  );
};

export default withSize()(Multicarousel);