import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, {  useState } from "react";
import { banner, star, sun } from "../../assets";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Testimonial1 } from "../../contents";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  return (
    <Container
      maxWidth={"90vw"}
      h={"100%"}
      background={"#FFEFE3"}
      centerContent
    >
      <Image src={sun} marginTop={"2rem"} marginBottom={"2rem"} />

      <Heading display={"flex"} gap={"10px"}>
        <Image src={star} />
        <Text
          fontWeight={"700"}
          fontSize={{ lg: "32px", md: "32px", sm: "25px", base: "20px" }}
          color={"#D97122"}
        >
          User Testimonial
        </Text>
        <Image src={star} />
      </Heading>

      <Box>
        <Box width={'60vw'}>
          <Carousel
            slidesToShow={5}
            slidesToScroll={1}
            showStatus={false}
            showArrows={false}
            showThumbs={false}
            showIndicators={false}
            width={"30%"}
            centerMode={true}
            onChange={setCurrentSlide}
            selectedItem={currentSlide}
            centerContent
            className="carousel"
          >
            {Testimonial1.map((i) => (
              <Box key={i.id} marginTop={"2rem"}>
                <Image src={i.icon} alt="Images" />
              </Box>
            ))}
          </Carousel>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"2rem"}
          marginTop={'1.5rem'}
        >
          <Button borderRadius={"50px"} onClick={handlePrev}>
            <IoIosArrowBack
              style={{
                width: "20px",
                height: "40px",
                fontWeight: "bold",
              }}
              color="#BF6928"
            />
          </Button>
          <Button borderRadius={"50px"} onClick={handleNext}>
            <IoIosArrowForward
              style={{
                width: "20px",
                height: "40px",
                fontWeight: "bold",
              }}
              color="#BF6928"
            />
          </Button>
        </Box>
      </Box>
      <Image width={'full'} marginTop={"6rem"} src={banner} />
    </Container>
  );
};

export default Testimonial;
