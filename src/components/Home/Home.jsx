import React from "react";

import { background } from "../../assets";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { Navbar } from "../data";
import { services } from "../../contents";

const headingOptions = {
  pos: "absolute",
  left: "54%",
  top: "15rem",
  transform: "translate(-50%,-50%)",
  textTransform: "Capitalize",
};

const textOptions = {
  pos: "absolute",
  left: "55%",
  top: "20rem",
  transform: "translate(-50%,-50%)",
  textTransform: "capitalize",
};

const buutonOpption = {
  pos: "absolute",
  left: "50%",
  top: "26rem",
  transform: "translate(-50%,-50%)",
  textTransform: "capitalize",
  size: "3xl",
};

const Home = () => {
  return (
    <>
      <Box width={{md:'100%',sm:'105%',base:'110%'}}>
        <Navbar />
        <HomeItem />
        <Box
          display={"flex"}
          margin={{
            xl:'-7rem 10rem',
            lg: "-7rem 12rem",
            md: "-7rem 5rem",
            sm: "-7rem 5rem",
            base: "-5rem 2rem",
          }}
          pos={"absolute"}
          justifyContent={"space-between"}
          gap={{xl:"5.5rem",lg:"1.5rem",md:"1.5rem",sm:'1.2rem',base:"1rem"}}
        >
          {services.map((i) => (
            <Image
              width={{ lg: "150px", md: "115px", sm: "72px", base: "37px" }}
              src={i.icon}
              alt="serivesImages"
              key={i.id}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

const HomeItem = () => (
  <Box w={"100%"}>
    <Image
      src={background}
      w="100%"
      h={{xl:'100vh',lg: "580px", md: "560px", sm: "530px", base: "400px" }}
      filter={"hue-rotate(-255deg)"}
    />
    <Heading
      color={"#FDFDFD"}
      fontWeight={"700"}
      fontSize={{
        lg: "54.4px",
        md: "42.4px",
        sm: "27px",
        base: "16px",
      }}
      lineHeight={"74.76px"}
      textAlign={"center"}
      letterSpacing={"8.5%"}
      fontStyle={"normal"}
      width={"60%"}
      position={"absolute"}
      {...headingOptions}
      top={{md: "15rem", sm: "13rem", base: "11rem" }}
    >
      "Astrology for Clarity"
    </Heading>
    <Text
      fontSize={{lg: "16px", md: "12px", sm: "10px", base: "5px" }}
      fontWeight={"400"}
      lineHeight={{md:"23.95px",sm:'20.95px',base:"8px"}}
      letterSpacing={"0.2em"}
      color={"#FDFDFD"}
      position={"absolute"}
      {...textOptions}
      top={{md: "19rem", sm: "16rem", base: "13rem" }}
    >
      Your Name is a Vedic Astrologer and has expertise in Vaastu and Mantra
      Theraphy
    </Text>
    <Button
      width={{lg: "217px", md: "200px", sm: "180px", base: "120px" }}
      h={{lg: "59px", md: "50px", sm: "45px", base: "30px" }}
      borderRadius={"43px"}
      background={"#D97122"}
      border={"none"}
      {...buutonOpption}
      top={{xl:'35rem',lg:'25rem',md: "25rem", sm: "22rem", base: "19rem" }}
    >
      <Text
        fontSize={{ md: "18px", sm: "16px", base: "13px" }}
        fontWeight={"400"}
        lineHeight={"27px"}
        color={"#FFFFFF"}
        fontStyle={"semiBold"}
      >
        Consult Now
      </Text>
    </Button>
  </Box>
);

export default Home;
