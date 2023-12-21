import { FormControl, Container, Box, Image } from "@chakra-ui/react";
import React from "react";

const Telefono = () => {
  return (
    <Container className="telefono-container" textAlign="center">
      <FormControl>
        <Box boxSize={{ base: "90%", md: "50%" }} mx="auto">
          <Image
            src="/src/assets/TELEFONO.jpg"
            alt=""
            mx="auto" // Centra horizontalmente la imagen
            my={{ base: 4, md: 8 }} // Ajusta los márgenes según tus necesidades
          />
        </Box>
      </FormControl>
    </Container>
  );
};

export default Telefono;
