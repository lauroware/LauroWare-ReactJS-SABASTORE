import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Container,
  Box,
  Textarea,
  Center,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

<Container className="cart-container">
  <FormControl onSubmit={handleSubmit}>
    <Box>
      <FormLabel>Nombre y Apellido </FormLabel>
      <Input type="text" onChange={(e) => setUserName(e.target.value)} />
      <FormLabel>Correo electrónico</FormLabel>
      <Input type="email" onChange={(e) => setUserEmail(e.target.value)} />
    </Box>
    <FormLabel>Confirmar punto de entrega:</FormLabel>
    <Textarea></Textarea>
    <Box className="btn-send">
      <Button type="submit" colorScheme="teal" variant="outline">
        Confirmar Compra
      </Button>
    </Box>
  </FormControl>
</Container>;
