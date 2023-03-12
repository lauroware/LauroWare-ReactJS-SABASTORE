import { useEffect, useState, useContext } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Button, Container, Center, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const [cart, setCart, clearCart, removeId] = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalAmount = 0;
    cart.forEach((clothe) => {
      totalAmount += clothe.price * clothe.quantity;
    });
    setTotal(totalAmount);
  }, [cart]);

  const handleRemove = (id) => {
    removeId(id);
  };

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
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Producto</Th>
                    <Th>Unidades</Th>
                    <Th isNumeric>Precio</Th>
                    <Th isNumeric>Precio total</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
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
                        X
                      </Button>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Container>
        );
      })}
      {cart.length > 0 && (
        <Container>
          <Text fontWeight="bold" fontSize="2xl">
            Total: ${total}
          </Text>
          <br />
          <Link to={"/cart"}>
            <Button colorScheme="red" onClick={() => clearCart()}>
              Vaciar Carrito
            </Button>
          </Link>
          <Link to={"/Checkout"}>
            <Button colorScheme="green">Solicitar</Button>
          </Link>
        </Container>
      )}
      <br />
    </>
  );
};

export default Cart;
