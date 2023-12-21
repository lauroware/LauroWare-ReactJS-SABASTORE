import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const whatsappLink = "https://wa.me/005491162366175"; // Reemplaza "tu-numero-de-telefono" con tu número de teléfono

  return (
    <Container maxW="150rem" bg="black" color="white">
      <Flex alignItems="center" flexWrap="wrap" gap="2">
        <Avatar size="xl" src="src/assets/LOGO.png" />
        <Box
          p="10"
          w={{ base: "100%", md: "300px" }}
          h="100"
          textAlign={{ base: "center", md: "left" }}
        >
          <Link to={"/welcome"}>
            <Heading size="md">Totinas - Store Mayorista</Heading>
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Menu>
            <Link to={"/catalogue"}>
              <MenuButton
                as={Button}
                size={{ base: "sm", md: "lg" }}
                variant="outline"
                colorScheme="White"
                m="5"
              >
                Tienda
              </MenuButton>
            </Link>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              size={{ base: "sm", md: "lg" }}
              variant="outline"
              colorScheme="black"
              rightIcon={<ChevronDownIcon />}
              m="5"
            >
              Categorias
            </MenuButton>
            <MenuList color="black" className="menu-list">
              {/* ... (tus enlaces de categorías) */}
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box>
          <Button
            as={Link}
            to={whatsappLink}
            size={{ base: "sm", md: "lg" }}
            variant="outline"
            colorScheme="black"
            m="5"
          >
            Ayuda
          </Button>
        </Box>
        <Spacer />
        <Box p={{ base: "5", md: "10" }} w="100px" h="100">
          <Link to={"/cart"}>
            <CartWidget />
          </Link>
        </Box>
      </Flex>
    </Container>
  );
};

export default NavBar;
