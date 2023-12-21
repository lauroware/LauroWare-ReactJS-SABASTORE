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

const Contact = () => {
  return (
    <Container maxW="container.sm" className="cart-container">
      <Flex direction="column" align="center">
        <FormControl mb="4" w="100%">
          <FormLabel htmlFor="name">Nombre</FormLabel>
          <Input type="text" id="name" />
        </FormControl>
        <FormControl mb="4" w="100%">
          <FormLabel htmlFor="email">Correo Electrónico</FormLabel>
          <Input type="email" id="email" />
        </FormControl>
        <FormControl mb="4" w="100%">
          <FormLabel htmlFor="message">Escribe tu mensaje</FormLabel>
          <Textarea id="message" />
        </FormControl>
        <Box className="btn-send" w="100%">
          <Button colorScheme="teal" variant="outline" w="100%">
            Enviar
          </Button>
        </Box>
      </Flex>
    </Container>
  );
};

export default Contact;
