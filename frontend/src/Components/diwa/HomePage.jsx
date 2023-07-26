import React from 'react'

import SliderFun from './Slider'
import { Box, Container, Heading ,Grid,Text,GridItem, SimpleGrid, HStack, Button} from '@chakra-ui/react'
import Cart from './Card'
import Multicarousel from './Multicarousel'
import { BsFillHandIndexThumbFill } from 'react-icons/bs';
import { AiFillCalculator } from 'react-icons/ai';
import { FcHome } from 'react-icons/fc';
import VideoCart from './VideoCard'

export const HomePage = () => {
  let data=[
    {name:"Full Home Interior",text:"Know the estimate price for your full home interiors",logo:<FcHome/>},
    {name:"Kitchen",text:"Get an approximate costing for your kitchen interior",logo:<FcHome/>},
    {name:"Wardrobe",text:"Our rough math for your wardrobe",logo:<FcHome/>},
  ]
  return (
    <div>
        <SliderFun />
        {/* One-stop shop for all things interiors */}
        <Box>
            <Container maxW={"container.xl"}>
     <Heading  mt={"4"}>One-stop shop for all things interiors</Heading>
     <Text fontSize={{base:"lg",md:"2xl"}}>Be it end-to-end interiors, renovation or modular solutions, we have it all for your home</Text>
     <Text fontSize={{base:"lg",md:"2xl"}}>or office. With a wide range of furniture & decor, we have your back from start to finish.</Text>
     {/* cart is here ! */}
     <Cart />
  {/* Inspiration for home interior designs part here */}
  <Box >
   <Box mt="15px" mb="5px">
    <Heading fontSize={{base:"2xl",md:"4xl"}}>Inspiration for home interior designs</Heading>
    <Text>Give your home a new look with these interior design ideas curated for you</Text>
    </Box>
    <Box>
    <Grid
  h='400px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
 
>
  <GridItem rowSpan={1} colSpan={3} h={{base:"100px",md:"400px"}} bg='tomato' bgImage={"https://images.livspace-cdn.com/w:700/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/living-room-d-1689150613-oIGOU.jpg"}  backgroundSize={"cover"}  />
  <GridItem colSpan={1}h={{base:"100px",md:"400px"}} bg='papayawhip' bgImage={"https://images.livspace-cdn.com/w:282/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/master-bedroom-d-1689150615-GAvUx.jpg"} backgroundSize={"cover"} />
  <GridItem colSpan={1} h={{base:"100px",md:"400px"}}bg='papayawhip' bgImage={"https://images.livspace-cdn.com/w:282/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/balcony-d-1689150522-g4abr.jpg"} backgroundSize={"cover"} />
  
</Grid>
<Grid
mt={{base:"-290px",md:"4"}}

  h='400px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
  
>
  <GridItem rowSpan={1} bg='tomato' h={{base:"100px",md:"400px"}} bgImage={"https://images.livspace-cdn.com/w:282/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/pooja-room-d-1689150616-Sdepu.jpg"}  backgroundSize={"cover"}  />
  <GridItem colSpan={3} rowSpan={1} h={{base:"100px",md:"400px"}} bg='papayawhip' bgImage={"https://images.livspace-cdn.com/w:700/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/kitchen-d-1689150612-ouirR.jpg"} backgroundSize={"cover"} />
  <GridItem colSpan={1} bg='papayawhip' h={{base:"100px",md:"400px"}} bgImage={"https://images.livspace-cdn.com/w:282/h:394/dpr:1/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/interior-designer-near-me-1668702759-oSI2D/design-stories-1668705027-Hz88h/desktop-1668705032-723a7/new-folder-1689150183-B8fsX/wardrobe-d-1689150619-VfOcJ.jpg"} backgroundSize={"cover"} />
  
</Grid>
    </Box>
  </Box>
  {/* multipe slider is here */}
  <Box mb="5" mt={{base:"-300px",md:"5"}}>
    <Heading textAlign={"center"} mt="5">Why choose us</Heading>
    <Box mt="5">
  < Multicarousel />
  </Box>
  </Box>

            </Container>
        </Box>
 
      {/* Get the estimate for your
KitchenWardrobe part here */}
<Box h={{base:"1200px",md:"500px"}} bg="gray.100" mt={{md:"-20"}} w="100%">
  <Container maxW={"container.xl"}>
  <Box textAlign={"center"}>
<Heading>Get the estimate for your Kitchen</Heading>
<Text>Calculate the approximate cost of doing up your home interiors</Text>
</Box>
<Box>
  <Box mt={"5"} mb="5">
  
    <SimpleGrid columns={{base:"1",md:"3"}}   >
      {data.map((el)=><Box h={{base:"300px",md:"300px"} } mt="5" w={{base:"300px",md:"400px"}} ml={"3"} boxShadow={"2xl"}   borderRadius={"2xl"} bg={"whiteAlpha.300"}>
        <Box mt="5">
          <HStack spacing={{base:"44",md:"56"}}>
            <Box fontSize={{base:"4xl" ,md:"6xl"}} >
             {el.logo}
            </Box>
            <Box fontSize={{base:"4xl" ,md:"6xl"}}>
              <AiFillCalculator />
            </Box>
          </HStack>
        </Box>
        <Box mt={"5"} mb="5" ml={"3"}>
          <Heading fontSize={{base:"xl",md:"2xl"}}>{el.name}</Heading>
         <Text>{el.text}</Text>

        </Box>
        <Box  w="80%" m={"auto"} borderRadius={"2xl"}>
        <Button colorScheme="red" borderRadius={"2xl"} variant='solid' w="100%" >
    Calculate 
  </Button>
        </Box>
      </Box>)}
      </SimpleGrid>
   
 </Box>
</Box>
</Container>
</Box>
{/* Check out some of our customer reviews  */}
<Box mt={{base:"10"}}>
  <Container maxW={"container.xl"}>
 <VideoCart />
  </Container>
</Box>
  
    </div>
  )
}
