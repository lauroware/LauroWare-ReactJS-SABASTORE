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
            <img src="/src/assets/carrito.png" alt="" />
          </Box>
        </FormControl>
      </Container>
    );
  };
  
  export default Cart;