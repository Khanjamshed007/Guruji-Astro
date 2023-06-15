import { Card, Container, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { star } from "../../assets";
import { Astrologers } from "../../contents";

const Astrologer = () => {
  return (
    <Container
      maxWidth={"90vw"}
      margin={"auto"}
      h={"100%"}
      background={"#FFEFE3"}
      centerContent
    >
      <Heading
        display={"flex"}
        gap={"10px"}
        marginTop={"3rem"}
        marginBottom={"20px"}
      >
        <Image
          src={star}
          width={{ lg: "32px", md: "32px", sm: "25px", base: "20px" }}
        />
        <Text
          fontWeight={"700"}
          fontSize={{ lg: "32px", md: "32px", sm: "25px", base: "18px" }}
          color={"#D97122"}
        >
          Permium Astrologers
        </Text>
        <Image
          src={star}
          width={{ lg: "32px", md: "32px", sm: "25px", base: "20px" }}
        />
      </Heading>

      <Card
        display={{ xl: "grid", md: "grid", sm: "flex", base: "flex" }}
        gridTemplateColumns={"repeat(3,1fr)"}
        flexDirection={"row"}
        overflowX={"auto"}
        gap={{ xl: "40px", lg: "40px", md: "40px", sm: "20px", base: "15px" }}
        cursor={"pointer"}
        background={"#FFEFE3"}
      >
        {Astrologers.map((astro) => (
          <Image src={astro.icon} key={astro.id} />
        ))}
      </Card>
    </Container>
  );
};

export default Astrologer;
