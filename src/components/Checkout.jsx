import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Box,
  Textarea,
  Center,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Checkout = () => {
  const [cart, setCart, clearCart] = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Center bg="black" h="100px" color="white">
        <Heading as="h2" size="2xl">
          Checkout
        </Heading>
      </Center>
      <Container className="cart-container">
        <FormControl onSubmit={handleSubmit}>
          <Box>
            <FormLabel>Nombre </FormLabel>
            <Input type="text" onChange={(e) => setUserName(e.target.value)} />
            <FormLabel>Correo electrónico</FormLabel>
            <Input
              type="email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </Box>
          <FormLabel>
            Ingresaar dirección de entrega o retiro en el local.
          </FormLabel>
          <Textarea></Textarea>
          <Box className="btn-send">
            <Button
              type="submit"
              colorScheme="blue"
              onClick={() => clearCart()}
            >
              <Link to={`/brief`}>Solicitar</Link>
            </Button>
          </Box>
        </FormControl>
      </Container>
    </>
  );
};

export default Checkout;
