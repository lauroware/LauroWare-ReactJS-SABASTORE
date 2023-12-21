import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Box,
  Flex,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const Mail = () => {
  return (
    <Container className="mail-container" textAlign="center">
      <FormControl>
        <Box boxSize={{ base: "90%", md: "50%" }} mx="auto">
          <img
            src="/src/assets/MAIL.jpg"
            alt=""
            mx="auto" // Centra horizontalmente la imagen
            my={{ base: 4, md: 8 }} // Ajusta los márgenes según tus necesidades
          />
        </Box>
      </FormControl>
    </Container>
  );
};

export default Mail;
