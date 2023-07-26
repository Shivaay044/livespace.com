'use client'

import {
  Flex,

  Box,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'

import { FaGreaterThan } from 'react-icons/fa';
const data = [ {
  imageURL:
    'https://images.livspace-cdn.com/w:320/h:234/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/modular-1-1682066917-W5NcL.jpg',
  name: 'diwakar Classic',
  text:"Creating React Application And Installing Module"
}, {
    imageURL:
      'https://images.livspace-cdn.com/w:320/h:234/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/modular-1-1682066917-W5NcL.jpg',
    name: 'Wayfarer Classic',
    text:"Creating React Application And Installing Module"
  },{
    imageURL:
      'https://images.livspace-cdn.com/w:320/h:234/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/modular-1-1682066917-W5NcL.jpg',
    name: 'Wayfarer Classic',
    text:"Creating React Application And Installing Module"
  },
  {
    imageURL:
      'https://images.livspace-cdn.com/w:320/h:234/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/modular-1-1682066917-W5NcL.jpg',
    name: 'Wayfarer Classic',
    text:"Creating React Application And Installing Module"
  }]





function Cart() {
  return (
    <>
    <SimpleGrid columns={{base:"1",md:"4"}} mt={"5"}>
   { data.map((el)=> <Box
    
  
     borderWidth="1px"
     rounded="lg"
     shadow="lg"
     >
    

     <Image src={el.imageURL} alt={`Picture of ${el.name}`} roundedTop="lg" backgroundPosition={"center"} backgroundSize={"contain"} />

     <Box p="6">
       
      
         <Box
           fontSize="2xl"
           fontWeight="semibold"
           textAlign={"center"}
           as="h4"
           lineHeight="tight"
           isTruncated>
           {el.name}
         </Box>
       <Text>
        {el.text}
       </Text>
       <Flex justify={"center"} mt={"5"}><FaGreaterThan  /></Flex>
      
     </Box>
  
   </Box>
  
 ) }
 </SimpleGrid>

 </>
  )
}

export default Cart