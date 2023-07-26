import React from "react";
import FooterTop from "./footerComp/FooterTop";
import { Box } from "@chakra-ui/react";
import FooterMiddle from "./footerComp/FooterMiddle";
import Location from "./footerComp/Location";
import Designs from "./footerComp/Designs";

function Footer() {
  return <Box color={"white"} bg={"#41303e"}>
    <FooterTop/>
    <FooterMiddle/>
    <Location/>
    <Designs/>
  </Box>;
}

export default Footer;
