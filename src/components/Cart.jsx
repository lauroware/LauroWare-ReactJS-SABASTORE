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
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const [cart, setCart, clearCart] = useContext(CartContext);

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
            <br />
            <br />
            <Text as="b">Producto: {clothe.name}</Text>
            <Text as="b">Unidades: {clothe.quantity}</Text>
            <Text>Precio: $ {clothe.price}</Text>
            <Text>
              Precio Total: $
              <parse className="int"> {clothe.price * clothe.quantity}</parse>
            </Text>
            <Link to={"/cart"}>
              <Button colorScheme="red" onClick={() => clearCart()}>
                Vaciar Carrito
              </Button>
            </Link>
            <Link to={"/Checkout"}>
              <Button colorScheme="green">Solicitar</Button>
            </Link>
            <br />
          </Container>
        );
      })}
    </>
  );
};

export default Cart;
