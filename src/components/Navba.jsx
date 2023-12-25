import React from "react";
import { Link } from "react-router-dom";
import { Heading, Container } from "@chakra-ui/react";

const NavBa = () => {
  return (
    <Container maxW="150rem" bg="black" color="white" minH="5vh" width="100%">
      <Link to={"/welcome"} style={{ textDecoration: "none" }}>
        <Heading size="sm" textAlign="center" py="1">
          Totinas - 2024
        </Heading>
      </Link>
      <Heading size="xs" textAlign="center" py="1">
        Designed by Lauro Ware
      </Heading>
    </Container>
  );
};

export default NavBa;
