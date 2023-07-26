import { Box, Card } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NewCard from "../Card/NewCard";

const image = [
    "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/in-the-news-1682401419-J61vw/toi-1682401483-unoIf.jpg",
    "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/in-the-news-1682401419-J61vw/cnbc-1682401476-zldSU.jpg",
    "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/in-the-news-1682401419-J61vw/femina-1682401478-VMDBI.jpg",
    "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/in-the-news-1682401419-J61vw/india-today-home-1682401481-kqBb2.jpg",
    "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/in-the-news-1682401419-J61vw/mint-1682401482-d0I7g.jpg",
    "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/in-the-news-1682401419-J61vw/your-story-1682401484-Lg2DW.jpg",
    "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/in-the-news-1682401419-J61vw/entrpreneur-1682677467-7QjOd.jpg",
    "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/in-the-news-1682401419-J61vw/et-1682401477-NjRCA.jpg",
    "https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/in/unification-home-1663681501-pVo75/desktop-1663681517-hulYi/in-the-news-1682401419-J61vw/bloomberg-1682401474-ArUs1.jpg"
]
  




function NewCarousel() {
  return <Box>
     <Carousel
  additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={1000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
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
  rewind
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={3}
  swipeable
>
 {
    image.map((el)=>(
        <NewCard el={el}/>
    ))
 }
  
</Carousel>
  </Box>;
}

export default NewCarousel;
