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
  const whatsappLink = "https://wa.me/+5491162366175";

  return (
    <Container maxW="150rem" bg="black" color="white">
      <Flex
        alignItems={{ base: "center", md: "flex-start" }}
        flexWrap="wrap"
        gap="2"
        p="4"
      >
        <Avatar size="xl" src="https://totinas.com.ar/assets/tienda/LOGO.png" />
        <Box
          p="4"
          w={{ base: "100%", md: "300px" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Link to="/welcome">
            <Heading size="md">Totinas - Store Mayorista</Heading>
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Menu>
            <Link to="/catalogue">
              <MenuButton
                as={Button}
                size={{ base: "md", md: "lg" }}
                variant="outline"
                colorScheme="white"
                m={{ base: "2", md: "5" }}
              >
                Tienda
              </MenuButton>
            </Link>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              size={{ base: "md", md: "lg" }}
              variant="outline"
              colorScheme="black"
              rightIcon={<ChevronDownIcon />}
              m={{ base: "2", md: "5" }}
            >
              Categorías
            </MenuButton>
            <MenuList color="black" className="menu-list">
              <MenuList color="black" className="menu-list">
                <Link to={`/category/${"indumentaria"}`}>
                  <MenuItem>Indumentaria</MenuItem>
                </Link>
                <Link to={`/category/${"Billes"}`}>
                  <MenuItem>Billes</MenuItem>
                </Link>
                <Link to={`/category/${"Chicos"}`}>
                  <MenuItem>Chicos</MenuItem>
                </Link>
                <Link to={`/category/${"Botineros"}`}>
                  <MenuItem>Botineros</MenuItem>
                </Link>
                <Link to={`/category/${"Estuche"}`}>
                  <MenuItem>Estuches</MenuItem>
                </Link>
                <Link to={`/category/${"Llaveros"}`}>
                  <MenuItem>Llaveros</MenuItem>
                </Link>
                <Link to={`/category/${"Bandoleras"}`}>
                  <MenuItem>Bandoleras</MenuItem>
                </Link>
                <Link to={`/category/${"Riñoneras"}`}>
                  <MenuItem>Riñoneras</MenuItem>
                </Link>
                <Link to={`/category/${"Mochilas"}`}>
                  <MenuItem>Mochilas</MenuItem>
                </Link>
                <Link to={`/category/${"Home"}`}>
                  <MenuItem>Home</MenuItem>
                </Link>
              </MenuList>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box>
          <Button
            as={Link}
            to={whatsappLink}
            size={{ base: "md", md: "lg" }}
            variant="outline"
            colorScheme="black"
            m={{ base: "2", md: "5" }}
          >
            Ayuda
          </Button>
        </Box>
        <Spacer />
        <Box p={{ base: "5", md: "10" }} w="100px" h="100">
          <Link to="/cart">
            <CartWidget />
          </Link>
        </Box>
      </Flex>
    </Container>
  );
};

export default NavBar;
