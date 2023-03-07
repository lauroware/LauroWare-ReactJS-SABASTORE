import React from "react";
import { Link } from "react-router-dom";
import {
  InfoOutlineIcon,
  ChatIcon,
  PhoneIcon,
  EmailIcon,
} from "@chakra-ui/icons";
import { Flex, Box, Spacer, Heading, Container } from "@chakra-ui/react";

const NavBa = () => {
  return (
    <>
      <Container maxW="150rem" bg="black" color="white">
        <Flex alignItems="center" gap="2">
          <Box p="10" w="300px" h="100">
            <Link to={"/welcome"}>
              <Heading size="md">Totinas - 2023 </Heading>
            </Link>
          </Box>
          <Spacer />
          <Box p="10" w="100px" h="100">
            <Link to={"/Mail"}>
              <EmailIcon />
            </Link>
          </Box>
          <Box p="10" w="100px" h="100">
            <Link to={"/Info"}>
              <InfoOutlineIcon />
            </Link>
          </Box>
          <Box p="10" w="100px" h="100">
            <Link to={"/Telefono"}>
              <PhoneIcon />
            </Link>
          </Box>
          <Box p="10" w="100px" h="100">
            <Link to={"/contact"}>
              <ChatIcon />
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBa;
