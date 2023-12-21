import { useEffect, useState, useContext } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import { Button, Container, Center, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const [cart, setCart, clearCart, removeId, updateQuantity] =
    useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalAmount = 0;
    cart.forEach((clothe) => {
      totalAmount += clothe.price * clothe.quantity;
    });
    setTotal(totalAmount);
  }, [cart]);

  const handleRemove = (id) => {
    const updatedCart = cart.map((clothe) => {
      if (clothe.id === id) {
        return {
          ...clothe,
          quantity: clothe.quantity > 1 ? clothe.quantity - 1 : 0,
        };
      }
      return clothe;
    });

    // Eliminar el producto si la cantidad después de la reducción es 0
    const finalCart = updatedCart.filter((clothe) => !(clothe.quantity === 0));

    setCart(finalCart);
  };

  const handleIncrease = (id) => {
    // Aumentar la cantidad en 1 usando updateQuantity
    updateQuantity(id, cart.find((clothe) => clothe.id === id).quantity + 1);
  };

  return (
    <>
      <Center bg="black" h="100px" color="white">
        <Heading as="h2" size="2xl">
          Carrito de compras
        </Heading>
      </Center>
      <Container maxW="container.sm" className="main-catalogue">
        <br />
        <br />
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Producto</Th>
                <Th>Unidades</Th>
                <Th isNumeric>Precio</Th>
                <Th isNumeric>Precio total</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {cart.map((clothe) => (
                <Tr key={clothe.id}>
                  <Td>
                    <Text as="b">{clothe.name}</Text>
                  </Td>
                  <Td>
                    <Text as="b">{clothe.quantity}</Text>
                  </Td>
                  <Td isNumeric>$ {clothe.price}</Td>
                  <Td isNumeric>$ {clothe.price * clothe.quantity}</Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      onClick={() => handleRemove(clothe.id)}
                    >
                      -
                    </Button>
                    <Button
                      colorScheme="green"
                      onClick={() => handleIncrease(clothe.id)}
                    >
                      +
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
      {cart.length > 0 && (
        <Container maxW="container.sm">
          <Box p="4">
            <Text fontWeight="bold" fontSize="2xl">
              Total: ${total}
            </Text>
            <br />
            <Link to={"/cart"}>
              <Button colorScheme="red" onClick={() => clearCart()} mr="2">
                Vaciar Carrito
              </Button>
            </Link>
            <Link to={"/checkout"}>
              <Button colorScheme="green">Solicitar</Button>
            </Link>
          </Box>
        </Container>
      )}
      <br />
    </>
  );
};

export default Cart;
