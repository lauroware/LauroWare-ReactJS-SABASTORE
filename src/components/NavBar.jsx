import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { EmailIcon } from '@chakra-ui/icons'
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
          <Avatar
            size="xl"
            src="./src/assets/LOGO1.jpg"
          />
          <Box p="10" w="300px" h="100">
            <Link to={"/welcome"}>
              <Heading size="md">Saba Clothes - Store</Heading>
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
              <MenuList  color="black" className="menu-list">
                <Link to={`/category/${"Indumentaria"}`}>
                  <MenuItem>Indumentaria</MenuItem>
                </Link>
                <Link to={`/category/${"Accesorios"}`}>
                  <MenuItem>Accesorios</MenuItem>
                </Link>
                <Link to={`/category/${"Sale!"}`}>
                  <MenuItem>Sale!</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="10" w="300px" h="100">
              <CartWidget />
          </Box>
          <Box p="10" w="100px" h="100">
            <Link to={"/cart"}>
              <EmailIcon />
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  );
};


export default NavBar;
