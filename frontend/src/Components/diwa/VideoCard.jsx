'use client'

import {
  Flex,

  Box,
  AspectRatio ,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'


const data = [ {
  imageURL:
    'https://images.livspace-cdn.com/w:320/h:234/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/modular-1-1682066917-W5NcL.jpg',
    name: "Rohit Paul & Shveta " ,
  text:"Hats off to the entire team at Livspace. They finished the project ahead of time."
}, {
    imageURL:
      'https://images.livspace-cdn.com/w:320/h:234/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/modular-1-1682066917-W5NcL.jpg',
    name: 'Swati & Gaurav',
    text:"Our experience with Livspace was nice thanks to the project managers"
  },{
    imageURL:
      'https://images.livspace-cdn.com/w:320/h:234/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/offerings-interiors-1682066909-GMFDK/modular-1-1682066917-W5NcL.jpg',
    name: 'Puja Bhatiya',
    text:"We reached out to Livspace and they designed the house that we really wanted."
  }]





function VideoCart() {
  return (
    <>
    <SimpleGrid columns={{base:"1",md:"3"}} mt={"5"} spacing={"5"} >
   { data.map((el)=> <Box
    
  
     borderWidth="1px"
     rounded="lg"
     shadow="lg"
     w="100%"
    gap="2"
     >
    

     {/* <Image src={el.imageURL} alt={`Picture of ${el.name}`} roundedTop="lg" backgroundPosition={"center"} backgroundSize={"contain"} /> */}
     <AspectRatio  ratio={1}  maxW={{base:"52",md:"64"}}  m="auto" mt="2"
     >
  <iframe
    title='naruto'
    src='https://www.youtube.com/embed/QhBnZ6NPOY0'
    allowFullScreen
  />
</AspectRatio>

     <Box p="6">
       
      
         <Box
           fontSize={{base:"xl",md:"2xl"}}
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
       
      
     </Box>
  
   </Box>
  
 ) }
 </SimpleGrid>

 </>
  )
}

export default VideoCart