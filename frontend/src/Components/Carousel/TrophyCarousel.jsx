import { Box, Card } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import TrophyCard from "../Card/TrophyCard";

const image = [
    {
        image:"https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/homepage/trophy-cabinet-1632932655-dSKZy/desktop-1632932664-wvWdu/v2-1684213832-QUMTD/gbn-d-v1-1684213854-rLyzH.jpg",
        desc:"Best Interior Design Solutions Brand"
    },
    {
        image:"https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/homepage/trophy-cabinet-1632932655-dSKZy/desktop-1632932664-wvWdu/v2-1684213832-QUMTD/best-interior-design-d-v1-1684213851-BVio3.jpg",
        desc:"India's Most Truted Brand"
    },
    {
        image:"https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/homepage/trophy-cabinet-1632932655-dSKZy/desktop-1632932664-wvWdu/v2-1684213832-QUMTD/entrpreneur-d-v1-1684213852-njoNT.jpg",
        desc:"Innovative Start-up"
    },
    {
        image:"https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/homepage/trophy-cabinet-1632932655-dSKZy/desktop-1632932664-wvWdu/v2-1684213832-QUMTD/fast-company-d-v1-1684213853-vvCJK.jpg",
        desc:"World Most innovative Company"
    },
    {
        image:"https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/homepage/trophy-cabinet-1632932655-dSKZy/desktop-1632932664-wvWdu/v2-1684213832-QUMTD/red-herring-d-v1-1684213855-oTyFz.jpg",
        desc:"Top 100 global Company"
    }
]


function TrophyCarousel() {
  return <Box>
    <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={false}
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
  swipeable
>
 {
    image.map((el)=>(
        <TrophyCard el={el}/>
    ))
 }
</Carousel>
</Box>;
}

export default TrophyCarousel;
