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
  
  const Cart = () => {
    return (
      <Container className="cart-container">
        <FormControl>
          <Box>
            <FormLabel>Nombre</FormLabel>
            <Input type="text" />
            <FormLabel>Correo Electrónico</FormLabel>
            <Input type="email" />
          </Box>
          <FormLabel>Escribe tu mensaje</FormLabel>
          <Textarea></Textarea>
          <Box className="btn-send">
            <Button colorScheme="teal" variant="outline">
              Enviar
            </Button>
          </Box>
        </FormControl>
      </Container>
    );
  };
  
  export default Cart;