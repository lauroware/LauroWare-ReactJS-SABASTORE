import CartWidget from "./CartWidget"
import { Container, Flex, Spacer, Box, Heading} from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'



 const NavBar = () => {
  return (
    <>

<Container maxW='100rem' bg='black'>
 <Flex>
    <Box w="1310px" p='4' bg='black' color="white">
     <Heading>
        Saba Store E-Commerce
     </Heading>
    </Box>
  <Spacer />
  <Box p='4' bg='black'>
  <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
        {isOpen ? 'Cerrar' : 'Tienda'}
      </MenuButton>
      <MenuList>
        <MenuItem>Indumentaria</MenuItem>
        <MenuItem>Accesorios</MenuItem>
        <MenuItem>Sale!</MenuItem>
      </MenuList>
    </>
  )}
</Menu>
 
  </Box>
  <Spacer />
    <Box p='4' bg='black' color="white">
      <CartWidget />
    </Box>
 </Flex>
</Container>


    </>
  )
}

export default NavBar


