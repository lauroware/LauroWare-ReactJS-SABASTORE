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
import { Link, useNavigate } from "react-router-dom"; // Importa useNavigate aquí
import Swal from "sweetalert2";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const [cart, setCart, clearCart, removeId, updateQuantity] =
    useContext(CartContext);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate(); // Mueve useNavigate aquí

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

    const finalCart = updatedCart.filter((clothe) => !(clothe.quantity === 0));
    setCart(finalCart);
  };

  const handleIncrease = (id) => {
    updateQuantity(id, cart.find((clothe) => clothe.id === id).quantity + 1);
  };

  const showSolicitarAlert = () => {
    // ...
  };

  const handleContinueShopping = () => {
    console.log("Redirigiendo a /catalogue");
    navigate("/catalogue");
  };

  return (
    <>
      <Center bg="black" h="100px" color="white">
        <Heading as="h2" size="2xl">
          Carrito de compras
        </Heading>
      </Center>
      <Container maxW="90%" className="main-catalogue" p="2">
        <br />
        <br />

        {cart.length === 0 ? (
          <Text textAlign="center" fontSize="xl" fontWeight="bold">
            Carrito vacío
          </Text>
        ) : (
          <TableContainer>
            <Table variant="simple" maxW="100%">
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
        )}
      </Container>

      {cart.length > 0 && total > 0 && (
        <Container maxW="container.sm" p="4">
          <Box>
            <Text fontWeight="bold" fontSize="2xl">
              Total: ${total}
            </Text>
            <br />
            <Link to={"/cart"}>
              <Button colorScheme="red" onClick={() => clearCart()} mr="2">
                Vaciar Carrito
              </Button>
            </Link>
            {total > 90000 && (
              <Link to={"/checkout"}>
                <Button
                  colorScheme="green"
                  onClick={() => showSolicitarAlert()}
                >
                  Solicitar
                </Button>
              </Link>
            )}
            {total <= 90000 && (
              <Button colorScheme="green" onClick={() => showSolicitarAlert()}>
                Faltan ${90000 - total} para solicitar
              </Button>
            )}

            {/* Botón "Continuar Comprando" */}
            <Button onClick={handleContinueShopping} ml="2">
              Continuar Comprando
            </Button>
          </Box>
        </Container>
      )}
      <br />
    </>
  );
};

export default Cart;
