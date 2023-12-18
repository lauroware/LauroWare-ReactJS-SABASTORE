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
  return (
    <>
      <Container maxW="150rem" bg="black" color="white">
        <Flex alignItems="center" gap="2">
          <Avatar size="xl" src="./src/assets/LOGO.png" />
          <Box p="10" w="300px" h="100">
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
                  size="lg"
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
                size="lg"
                variant="outline"
                colorScheme="black"
                rightIcon={<ChevronDownIcon />}
                m="5"
              >
                Categorias
              </MenuButton>
              <MenuList color="black" className="menu-list">
                <Link to={`/category/${"indumentaria"}`}>
                  <MenuItem>Indumentaria</MenuItem>
                </Link>
                <Link to={`/category/${"Billes"}`}>
                  <MenuItem>Billes</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="10" w="100px" h="100">
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
