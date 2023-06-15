import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { star } from "../../assets";
import "react-multi-carousel/lib/styles.css";
import { Reviews } from "../../contents";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Review = () => {
  return (
    <Container
      maxWidth={"90vw"}
      h={"100%"}
      background={"#FFEFE3"}
      centerContent
    >
      <Heading display={"flex"} gap={"10px"} marginTop={"3rem"}>
        <Image src={star} />
        <Text
          fontWeight={"700"}
          fontSize={{ lg: "32px", md: "32px", sm: "25px", base: "17px" }}
          color={"#D97122"}
        >
          User Testimonial
        </Text>
        <Image src={star} />
      </Heading>

      <Box width={"70vw"} marginTop={"4rem"} backgroundColor={"#FFF5EE"}>
        <Carousel
          showStatus={false}
          showArrows
        >
          {Reviews.map((review) => (
            <Box
              key={review.id}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              position={"relative"}
              flexDirection={"column"}
              height={"30rem"}
            >
              <Box
                display={"flex"}
                margin={"auto"}
                marginTop={{ lg: "2rem", md: "2rem", sm: "2rem", base: "5rem" }}
              >
                <Image src={review.img} />
              </Box>
              <Box
                width={"50%"}
                margin={"auto"}
                textAlign={"center"}
                marginBottom={"10rem"}
              >
                <Text
                  color={"#5B2800"}
                  fontSize={{ md: "20px", sm: "16px", base: "12px" }}
                  letterSpacing={"-1%"}
                  fontWeight={"400"}
                >
                  {review.title}
                </Text>
                <Box marginTop={"2rem"} marginBottom={"-2rem"}>
                  <Text
                    color={"#5B2800"}
                    fontSize={{ md: "20px", sm: "16px", base: "12px" }}
                    fontWeight={"700"}
                  >
                    {review.name}
                  </Text>
                </Box>
              </Box>
              <Box position={"absolute"} top={"80%"} zIndex={"1"}>
                <Image src={review.icon} />
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
};

export default Review;
