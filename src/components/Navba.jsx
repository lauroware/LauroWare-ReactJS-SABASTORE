import React from "react";
import { Link } from "react-router-dom";
import {
  InfoOutlineIcon,
  ChatIcon,
  PhoneIcon,
  EmailIcon,
} from "@chakra-ui/icons";
import { Flex, Box, Heading, Container } from "@chakra-ui/react";

const NavBa = () => {
  return (
    <Container maxW="150rem" bg="black" color="white" minH="100vh" width="100%">
      <Flex alignItems="center" flexDir="column" justify="center" py="3">
        <Box p="3" textAlign="center">
          <Link to={"/welcome"}>
            <Heading size="md">Totinas - 2024</Heading>
            <Heading size="md">Designed by Lauro Ware</Heading>
          </Link>
        </Box>
      </Flex>
    </Container>
  );
};

export default NavBa;
