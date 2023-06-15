import React from "react";
import { account, headingicon } from "../../assets";
import {
  Box,
  Container,
  Image,
  ListItem,
  UnorderedList,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      pos={"relative"}
      top={"6rem"}
      zIndex={"9999"}
      marginTop={"-100px"}
      maxWidth={"none"}
      backgroundColor={{
        md: "transparent",
        sm: "transparent",
        base: "rgba(255, 255, 255, 0.3)",
      }}
    >
      <Image
        marginLeft={{ lg: "6rem", md: "2rem", sm: "1rem", base: "5rem" }}
        src={headingicon}
        width={{ md: "200px", sm: "140px", base: "100px" }}
        alt=""
      />

      <IconButton
        icon={
          isOpen ? (
            <CloseIcon
              style={{
                width: "1rem",
                color: "white",
                position: "absolute",
                right: "14rem",
                bottom: "7px",
              }}
            />
          ) : (
            <HamburgerIcon
              style={{
                fontSize: "1.8rem",
                color: "white",
                position: "absolute",
                right: "14rem",
                bottom: "5px",
              }}
            />
          )
        }
        transition={"all .3s ease-in"}
        display={{ base: "block", sm: "none" }}
        onClick={isOpen ? onClose : onOpen}
        variant="ghost"
        size="md"
        aria-label="Toggle navigation"
      />
      <Box display={{ base: isOpen ? "block" : "none", sm: "block" }}>
        <UnorderedList
          listStyleType={"none"}
          display={"flex"}
          position={{ md: "unset", sm: "unset", base: "absolute" }}
          top={{ md: "unset", sm: "unset", base: "3rem" }}
          right={{ md: "unset", sm: "unset", base: "17rem" }}
          backgroundColor={{
            md: "unset",
            sm: "unset",
            base: "rgba(255,255,255,.3)",
          }}
          flexDirection={{ md: "row", sm: "row", base: "column" }}
          lineHeight={"27px"}
          fontSize={{ lg: "20px", md: "15px", sm: "12px" }}
          gap={{ lg: "2rem", md: "1rem", sm: "0.5rem" }}
          cursor={"pointer"}
          marginLeft={{lg:'10rem', md: "-5rem", sm: "-2rem" }}
          color={"white"}
        >
          <ListItem _hover={{ color: "#FD9D54" }}>Home</ListItem>
          <ListItem _hover={{ color: "#FD9D54" }}>
            Call with Astrologers
          </ListItem>
          <ListItem _hover={{ color: "#FD9D54" }}>Live (Coming Soon)</ListItem>
        </UnorderedList>
      </Box>
      <Image
        src={account}
        alt="Account"
        width={{ md: "50px", sm: "30px", base: "25px" }}
      />
      <div></div>
    </Container>
  );
};

export default Navbar;
