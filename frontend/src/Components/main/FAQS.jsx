import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Image,
  Center,
  VStack,
  Flex,
  Button,
  Text,
} from "@chakra-ui/react";

function FAQS() {
  return (
    <Box>
      <Box width={"80%"} m={"auto"} p={"15px"}>
        <Heading>FAQs About Home Interior Design</Heading>
        <Accordion p={"15px"}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Heading size={"1xl"}>
                    {" "}
                    1. Why do I need an interior designer?
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              You can think of an interior designer as a film director. Their
              job is to monitor every minute detail from start to the final cut.
              From pre-production to the final edit, their perspective is
              responsible for shaping the final product. Similarly, interior
              designers are professionals who are able to gauge your needs and
              tastes to deliver your dream home. They assist you in getting
              custom-designed pieces that fit perfectly into your beautiful
              vision. From raw materials to finished products, they take care of
              everything!
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Heading size={"1xl"}>
                    2. Why is Livspace perfect for your home interior design?
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Livspace is the perfect partner who can build your home interiors
              just the way you want! Our design experts customize designs as per
              your needs. They will listen to your ideas and suggest options. At
              Livspace, we incorporate advanced technology into our modular
              solutions to create flawless interiors and also to expedite the
              process of making your dream home a reality. So, book your
              consultation today with India's Most Trusted Home Interiors Brand,
              Livspace and talk to our designers about your project.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Heading size={"1xl"}>
                    3.What services are included under home interior design?
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Livspace is the perfect partner who can build your home interiors
              just the way you want! Our design experts customize designs as per
              your needs. They will listen to your ideas and suggest options. At
              Livspace, we incorporate advanced technology into our modular
              solutions to create flawless interiors and also to expedite the
              process of making your dream home a reality. So, book your
              consultation today with India's Most Trusted Home Interiors Brand,
              Livspace and talk to our designers about your project.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Heading size={"1xl"}>
                    4. How much does home interiors cost?
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Livspace is the perfect partner who can build your home interiors
              just the way you want! Our design experts customize designs as per
              your needs. They will listen to your ideas and suggest options. At
              Livspace, we incorporate advanced technology into our modular
              solutions to create flawless interiors and also to expedite the
              process of making your dream home a reality. So, book your
              consultation today with India's Most Trusted Home Interiors Brand,
              Livspace and talk to our designers about your project.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Heading size={"1xl"}>
                    5. What will be the timelines for my project completion?
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Livspace is the perfect partner who can build your home interiors
              just the way you want! Our design experts customize designs as per
              your needs. They will listen to your ideas and suggest options. At
              Livspace, we incorporate advanced technology into our modular
              solutions to create flawless interiors and also to expedite the
              process of making your dream home a reality. So, book your
              consultation today with India's Most Trusted Home Interiors Brand,
              Livspace and talk to our designers about your project.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Heading size={"1xl"}>
                    6. What are the trending interior design styles?
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Livspace is the perfect partner who can build your home interiors
              just the way you want! Our design experts customize designs as per
              your needs. They will listen to your ideas and suggest options. At
              Livspace, we incorporate advanced technology into our modular
              solutions to create flawless interiors and also to expedite the
              process of making your dream home a reality. So, book your
              consultation today with India's Most Trusted Home Interiors Brand,
              Livspace and talk to our designers about your project.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Box>
      <Center
      w="100%"
      h="300px"
      backgroundImage="url('https://images.livspace-cdn.com/w:1920/h:370/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/common/footer-banner-1675655981-KjP8R/livspace-footer-banner-web-1675656100-Qm9z2.jpg')" 
      bgSize="contain"
      bgPosition="center"  
      bgRepeat="no-repeat"  
    >
        <Flex  flexDirection={"column"}>
        <Heading m={"10px"}>Your dream home is just a click away</Heading>
         <Button bg={"#eb595f"} borderRadius={"30px"} m={"auto"} width={"min-content"}>GET STARTED</Button>
        </Flex>
    </Center>
      </Box>
      <Box fontSize={"15px"} m={"auto"} width={"80%"}>
         <Text p="5">*For renovation projects, the booking amount will be 15% of the final quote or Rs.25,000 (whichever is higher)</Text>
         <Text p="5">Note: For new home interiors, a site measurement fee of 10% on the final quote will be charged. This will be adjusted against your project value when we raise the sales order.</Text>
      </Box>
    </Box>
  );
}

export default FAQS;
