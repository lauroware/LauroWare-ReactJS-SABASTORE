import { useContext, useState } from "react";
import {
  Text,
  ButtonGroup,
  IconButton,
  Tooltip,
  Center,
  Button,
  Box,
  Divider,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import Swal from "sweetalert2";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const ItemQuantitySelector = ({ stock, id, price, name }) => {
  const [cart, setCart] = useContext(CartContext);
  const [count, setCount] = useState(1);

  const addQty = () => {
    setCount(count + 1);
  };

  const substractQty = () => {
    setCount(count - 1);
  };

  const addToCart = () => {
    if (count > 0) {
      setCart((currItems) => {
        const isItemFound = currItems.find((item) => item.id === id);
        if (isItemFound) {
          return currItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + count };
            } else {
              return item;
            }
          });
        } else {
          return [...currItems, { id, quantity: count, price, name }];
        }
      });

      // Mostrar SweetAlert al agregar al carrito
      Swal.fire({
        icon: "success",
        title: "Producto agregado al carrito",
        text: `Agregaste ${count} ${
          count === 1 ? "producto" : "productos"
        } al carrito.`,
      });
    } else {
      console.warn("No se puede agregar 0 productos al carrito.");
    }
  };

  const renderViewCartButton = () => {
    if (cart.length > 0) {
      return (
        <Box textAlign="center" mt="2">
          <Divider my="2" />
          <Link to="/cart">
            <Button size="sm" variant="outline" colorScheme="blue">
              Ver Carrito
            </Button>
          </Link>
        </Box>
      );
    }
    return null;
  };

  return (
    <Box>
      <ButtonGroup size={{ base: "sm", md: "md" }} isAttached variant="outline">
        {count < 1 ? (
          <Tooltip label="Stock mínimo alcanzado" placement="bottom">
            <IconButton icon={<MinusIcon />} isDisabled />
          </Tooltip>
        ) : (
          <IconButton icon={<MinusIcon />} onClick={substractQty} />
        )}
        <Center>
          <Button
            onClick={() => addToCart()}
            variant="solid"
            colorScheme="blue"
          >
            Agregar al carrito: {count}
          </Button>
        </Center>
        {count < stock ? (
          <IconButton icon={<AddIcon />} onClick={addQty} />
        ) : (
          <Tooltip label="Límite de stock alcanzado" placement="bottom">
            <IconButton icon={<AddIcon />} isDisabled />
          </Tooltip>
        )}
      </ButtonGroup>
      {renderViewCartButton()}
    </Box>
  );
};

export default ItemQuantitySelector;
