import {
  Box,
  Container,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { astroicon,  star, sunicon } from "../../assets";
import "./Solution.scss";
import { solutions } from "../../contents";

const Solution = () => {
  return (
    <Container
      maxWidth={"100vw"}
      margin={"auto"}
      h={"100%"}
      background={"#FFFFF"}
      centerContent
    >
      <Heading
        display={"flex"}
        gap={"10px"}
        marginTop={"6rem"}
        marginBottom={"3rem"}
      >
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
      <Box
        display={"grid"}
        gridGap={"2rem"}
        gridTemplateColumns={{ md: "1fr 2fr 1fr", sm: "1fr" }}
        className="second-element"
        placeItems={"center"}
      >
        <Box
          display={"flex"}
          flexDirection={{ lg: "column", md: "column", sm: "row" }}
          overflowX={{ sm: "auto", base: "auto" }}
          width={{ md:'unset',sm: "95%", base: "85%" }}
          position={{ md: "unset", sm: "absolute", base: "absolute" }}
          bottom={{ md: "unset", sm: "131rem", base: "138rem" }}
          left={{ md: "unset", sm: "1rem", base: "2rem" }}
          gap={{
            xl: "2rem",
            lg: "2rem",
            md: "2rem",
            sm: "1.5rem",
            base: "1rem",
          }}
        >
          {solutions.slice(0, 5).map((i, index) => (
            <Box
              display="flex"
              alignItems="center"
              border={"2px solid #A95210"}
              borderRadius={"10px"}
              w={{ xl: "18rem", lg: "14rem", md: "12rem" }}
              h={"4rem"}
              textAlign={"center"}
            >
              <Box
                flex="0 0 30%"
                backgroundColor={"#A95210"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                h={"62px"}
                borderRadius={"9px 0 0px 9px"}
              >
                <Image src={i.icon} alt={i.title} key={i.id} width={"45px"} />
              </Box>
              <Box
                flex="0 0 70%"
                display={"flex"}
                justifyContent={"center"}
                flexWrap={"wrap"}
                width={{ sm: "18rem", base: "14rem" }}
              >
                <Text
                  fontFamily={"subheading"}
                  fontWeight={"700"}
                  fontSize={"16px"}
                >
                  {i.title}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>

        <Box>
          <Image
            className="rotate"
            marginTop={{ md: "2rem", sm: "0rem", base: "0rem" }}
            marginBottom={{ md: "unset", sm: "8rem", base: "8rem" }}
            src={astroicon}
          />
          <Box position="relative" width="100%" height="100%">
            <Box
              position="absolute"
              bottom="50%"
              left="50%"
              transform={{
                lg: "translate(-50%, -88%)",
                md: "translate(-40%, -95%)",
                sm: "translate(-50%, -165%)",
                base: "translate(-34%, -200%)",
              }}
            >
              <Image
                src={sunicon}
                width={{ lg: "100%", md: "80%", sm: "100%", base: "75%" }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          display={"flex"}
          flexDirection={{ lg: "column", md: "column", sm: "row" }}
          overflowX={{ sm: "auto", base: "auto" }}
          width={{md:'101%',sm: "100%", base: "90%" }}
          gap={{
            xl: "2rem",
            lg: "2rem",
            md: "2rem",
            sm: "1.5rem",
            base: "1rem",
          }}
        >
          {solutions.slice(5).map((i, index) => (
            <Box
              display="flex"
              alignItems="center"
              border={"2px solid #A95210"}
              borderRadius={"10px"}
              w={{ xl: "18rem", lg: "14rem", md: "12rem" }}
              h={"4rem"}
              textAlign={"center"}
            >
              <Box
                flex="0 0 70%"
                display={"flex"}
                justifyContent={"center"}
                flexWrap={"wrap"}
                width={{ sm: "18rem", base: "14rem" }}
              >
                <Text
                  fontFamily={"subheading"}
                  fontWeight={"700"}
                  fontSize={"16px"}
                >
                  {i.title}
                </Text>
              </Box>
              <Box
                flex="0 0 31%"
                backgroundColor={"#A95210"}
                alignItems={"center"}
                justifyContent={"center"}
                display={"flex"}
                h={"62px"}
                borderRadius={"0px 9px 9px 0px"}
              >
                <Image src={i.icon} alt={i.title} key={i.id} width={"45px"} />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Solution;
