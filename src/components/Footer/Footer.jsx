import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import {
  facebook,
  headingicon,
  insta,
  paytm,
  razor,
  strip,
  twitter,
  youtube,
} from "../../assets";

const Footer = () => {
  return (
    <Container
      maxWidth={"100vw"}
      h={"100%"}
      background={"#BD5300"}
      marginTop={"3rem"}
      centerContent
    >
      <Grid
        templateColumns={{ md: "repeat(4, 1fr)", sm: "repeat(1, 1fr)" }}
        gap={6}
        margin={"3rem"}
      >
        <GridItem>
          <Image src={headingicon} />
          <Text
            width={"90%"}
            color={"#F8F8F8"}
            fontSize={"16px"}
            fontWeight={"500"}
          >
            About Guruji s2 to 3 lines what guruji do and how it works About
            Guruji s2 to 3 lines what guruji do and how it works
          </Text>
          <Box
            display={"flex"}
            margin={"1.5rem 0 1.5rem 0"}
            gap={"2rem"}
            flexWrap={"wrap"}
          >
            <Image src={facebook} />
            <Image src={insta} />
            <Image src={twitter} />
            <Image src={youtube} />
          </Box>
          <Box
            display={"flex"}
            margin={"1.5rem 0 1.5rem 0"}
            gap={"2rem"}
            flexDirection={"column"}
            flexWrap={"wrap"}
          >
            <Text
              fontSize={"22px"}
              w={"206px"}
              h={"24px"}
              fontWeight={"600"}
              color={"#F8F8F8"}
              textAlign={"center"}
            >
              Trusted & Seals
            </Text>
            <Box display={"flex"} gap={"1rem"} flexWrap={"wrap"}>
              <Image src={razor} />
              <Image src={paytm} />
              <Image src={strip} />
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            display={"flex"}
            flexDirection={{ md: "column", sm: "row" }}
            flexWrap={"wrap"}
            gap={"2rem"}
          >
            <Box
              display={"flex"}
              alignItems={"flex-start"}
              flexDirection={"column"}
              gap={"1.5rem"}
              flexWrap={"wrap"}
            >
              <Text
                fontSize={"22px"}
                fontWeight={"600"}
                textAlign={"center"}
                color={"#F8F8F8"}
              >
                Company
              </Text>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"0.7rem"}
                flexWrap={"wrap"}
              >
                <Text
                  fontSize={"16px"}
                  fontWeight={"500"}
                  letterSpacing={"10.5%"}
                  color={"#F8F8F8"}
                >
                  Home
                </Text>
                <Text
                  fontSize={"16px"}
                  fontWeight={"500"}
                  letterSpacing={"10.5%"}
                  color={"#F8F8F8"}
                >
                  Privacy Policy
                </Text>
                <Text
                  fontSize={"16px"}
                  fontWeight={"500"}
                  letterSpacing={"10.5%"}
                  color={"#F8F8F8"}
                >
                  T &C
                </Text>
                <Text
                  fontSize={"16px"}
                  fontWeight={"500"}
                  letterSpacing={"10.5%"}
                  color={"#F8F8F8"}
                >
                  Varied Payment
                </Text>
              </Box>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"1.5rem"}
              flexWrap={"wrap"}
            >
              <Text
                fontSize={"22px"}
                fontWeight={"600"}
                textAlign={"center"}
                color={"#F8F8F8"}
              >
                Collaborate
              </Text>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"0.7rem"}
                flexWrap={"wrap"}
              >
                <Text
                  fontSize={"16px"}
                  fontWeight={"500"}
                  letterSpacing={"10.5%"}
                  color={"#F8F8F8"}
                >
                  Clever Tap
                </Text>
                <Text
                  fontSize={"16px"}
                  fontWeight={"500"}
                  letterSpacing={"10.5%"}
                  color={"#F8F8F8"}
                >
                  Exotel
                </Text>
                <Text
                  fontSize={"16px"}
                  fontWeight={"500"}
                  letterSpacing={"10.5%"}
                  color={"#F8F8F8"}
                >
                  Facebook
                </Text>
                <Text
                  fontSize={"16px"}
                  fontWeight={"500"}
                  letterSpacing={"10.5%"}
                  color={"#F8F8F8"}
                >
                  Quora
                </Text>
                <Text
                  fontSize={"16px"}
                  fontWeight={"500"}
                  letterSpacing={"10.5%"}
                  color={"#F8F8F8"}
                >
                  Google
                </Text>
                <Text
                  fontSize={"16px"}
                  fontWeight={"500"}
                  letterSpacing={"10.5%"}
                  color={"#F8F8F8"}
                >
                  Youtube
                </Text>
              </Box>
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            display={"flex"}
            flexDirection={{ md: "column", sm: "row" }}
            flexWrap={"wrap"}
            gap={"2rem"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"1.5rem"}
              flexWrap={"wrap"}
            >
              <Text
                fontSize={"22px"}
                fontWeight={"600"}
                textAlign={"center"}
                color={"#F8F8F8"}
              >
                Support
              </Text>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"0.7rem"}
                flexWrap={"wrap"}
              >
                <Text
                  fontSize={"16px"}
                  fontWeight={"500"}
                  letterSpacing={"10.5%"}
                  color={"#F8F8F8"}
                >
                  Home
                </Text>
                <Text
                  fontSize={"16px"}
                  fontWeight={"500"}
                  letterSpacing={"10.5%"}
                  color={"#F8F8F8"}
                >
                  Privacy Policy
                </Text>
                <Text
                  fontSize={"16px"}
                  fontWeight={"500"}
                  letterSpacing={"10.5%"}
                  color={"#F8F8F8"}
                >
                  T &C
                </Text>
                <Text
                  fontSize={"16px"}
                  fontWeight={"500"}
                  letterSpacing={"10.5%"}
                  color={"#F8F8F8"}
                >
                  Varied Payment
                </Text>
              </Box>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"1.5rem"}
              flexWrap={"wrap"}
            >
              <Text
                fontSize={"22px"}
                fontWeight={"600"}
                textAlign={"center"}
                color={"#F8F8F8"}
              >
                Important Link
              </Text>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"0.7rem"}
                flexWrap={"wrap"}
              >
                <Text
                  fontSize={"16px"}
                  fontWeight={"500"}
                  letterSpacing={"10.5%"}
                  color={"#F8F8F8"}
                >
                  Tarot Reader
                </Text>
                <Text
                  fontSize={"16px"}
                  fontWeight={"500"}
                  letterSpacing={"10.5%"}
                  color={"#F8F8F8"}
                >
                  Vedic Astrology
                </Text>
                <Text
                  fontSize={"16px"}
                  fontWeight={"500"}
                  letterSpacing={"10.5%"}
                  color={"#F8F8F8"}
                >
                  Palmistry
                </Text>
                <Text
                  fontSize={"16px"}
                  fontWeight={"500"}
                  letterSpacing={"10.5%"}
                  color={"#F8F8F8"}
                >
                  Gemology
                </Text>
                <Text
                  fontSize={"16px"}
                  fontWeight={"500"}
                  letterSpacing={"10.5%"}
                  color={"#F8F8F8"}
                >
                  Vastu
                </Text>
                <Text
                  fontSize={"16px"}
                  fontWeight={"500"}
                  letterSpacing={"10.5%"}
                  color={"#F8F8F8"}
                >
                  Numerology
                </Text>
              </Box>
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box display={"flex"} flexWrap={"wrap"}>
            <Box display={"flex"} flexWrap={"wrap"} gap={"1rem"}>
              <Input
                type="name"
                placeholder="Your Name"
                backgroundColor={"#FBFBFB"}
              />
              <Input
                type="email"
                placeholder="Mail ID"
                backgroundColor={"#FBFBFB"}
              />
              <Textarea placeholder="Write Query" backgroundColor={"#FBFBFB"} />
              <Button
                backgroundColor={"#4B9C0C"}
                color={"#FBFBFB"}
                width={"full"}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Footer;
