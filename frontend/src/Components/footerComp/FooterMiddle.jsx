import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function FooterMiddle() {
  return <Box>
  <hr></hr>
    <Box m={"5px"}>
       <Flex justifyContent={"space-around"} align={"center"}>
         <Text>© 2023 Bonito.com All Rights Reserved</Text>
         <Box>
            <Flex  align={"center"} p={"10px"}>
                <Box>
                <Text>Choose your country</Text>
                </Box>
                <Box>
                <Button color={"white"} borderRadius={"1px solid red"}  bg={"#41303e"}>IND</Button>
                <Button color={"white"} borderRadius={"1px solid red"}  bg={"#41303e"}>SG</Button>
                <Button color={"white"} borderRadius={"1px solid red"}  bg={"#41303e"}>MY</Button>
                <Button color={"white"} borderRadius={"1px solid red"}  bg={"#41303e"}>SA</Button>
                </Box>
            </Flex>
         </Box>
       </Flex>
    </Box>
  <hr></hr>
  <Box color={"hsla(0,0%,100%,.6)"} width={"92%"} m={"auto"}>
    <Text>
    *India’s Most Trusted Home Interiors Brand - by White Page International | *No. of homes delivered in October 2020 for every working hour | ¹Internal research carried out with Praxis | ²In comparison with a branded player and for exact scope | ³For kitchen, wardrobes and storage | For full scope, please visit, www.livspace.com/in/interiors/service

Discover Top Home Interior Designers With Livspace
Embark on an epic journey of house renovation and transformation with Livspace interior designers -  a place where your home interior design dreams become a reality! Are you seeking awe-inspiring renovations and interior designs to elevate your home interiors? Look no further! Livspace reigns supreme as the unrivalled home interior designer, providing a comprehensive repertoire of trendy, functional and sensational options that turn houses into veritable works of art!
    </Text>
    <Text>
    Unleash your imagination and let us weave our magic into every corner, as we bring your dream home to life, surpassing all expectations for you and your loved ones. Get ready to be mesmerised and talk to one of our top interior consultants today.

Our Foray Into Interior Design For Homes 
The genesis of our journey emerged from the aspirations of two visionary friends, Anuj Srivastava and Ramakant Sharma, who, like countless others, harboured dreams of creating the perfect homes. However, they were met with a disjointed and disorganised interior design landscape. This inspired a revolutionary idea, propelling the dynamic duo on a mission to reshape the world of interior designs for homes. The rest, as they say, is history!

Today, Livspace has designed over 50,000 residences throughout India and Singapore, earning resounding accolades within the interior design industry. Meticulously refining the craft of interior design for homes and renovation, we have sculpted a process that is nothing short of extraordinary for you and your home. Our prime focus is centred around the customer, ensuring that each venture concludes with breathtaking home interior design outcomes that transcend your expectations. 
    </Text>
  </Box>
  <Image src="https://i.ibb.co/Yjt6D9b/Screenshot-2023-07-26-075236.png"/>
  <Image src="https://i.ibb.co/mBbnKG5/Screenshot-2023-07-26-080200.png"/>
  </Box>;
}

export default FooterMiddle;
