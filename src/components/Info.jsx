import { Container, Box, Image } from "@chakra-ui/react";
import React from "react";

const Info = () => {
  return (
    <Container maxW="container.sm" className="cart-container">
      <Box>
        <Image src="/src/assets/INFO.jpg" alt="Información" boxSize="100%" />
      </Box>
    </Container>
  );
};

export default Info;
