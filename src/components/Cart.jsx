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
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const [cart, setCart, clearCart] = useContext(CartContext);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    console.log(userName);
    console.log(userEmail);
    alert("Formulario enviado");
  };

  const deleteId = cart.map((clothe) => {
    return clothe.id;
  });

  return (
    <>
      <Center bg="black" h="100px" color="white">
        <Heading as="h2" size="2xl">
          Carrito de compras
        </Heading>
      </Center>
      {cart.map((clothe) => {
        return (
          <Container
            key={clothe.id}
            maxW="container.sm"
            className="main-catalogue"
          >
            <Card maxW="sm" m="3rem">
              <CardHeader>
                <Heading size="md">{clothe.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text as="b">Unidades: {clothe.quantity}</Text>
                <Text>Precio: $ {clothe.price}</Text>
                <Text>
                  Precio Total: $
                  <parse className="int">
                    {" "}
                    {clothe.price * clothe.quantity}
                  </parse>
                </Text>
              </CardBody>
              <CardFooter>
                <Link to={"/cart"}>
                  <Button colorScheme="red" onClick={() => clearCart()}>
                    Vaciar Carrito
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </Container>
        );
      })}
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
          <FormLabel>Comentarios</FormLabel>
          <Textarea></Textarea>
          <Box className="btn-send">
            <Button
              type="submit"
              colorScheme="teal"
              variant="outline"
              onClick={() => clearCart()}
            >
              <Link to={`/checkout`}>Solicitar</Link>
            </Button>
          </Box>
        </FormControl>
      </Container>
    </>
  );
};

export default Cart;
