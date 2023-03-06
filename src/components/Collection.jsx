import React from "react";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";

const Collection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "indumentaria");
    getDocs(itemsCollection).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <>
      {products.map((clothe) => (
        <Flex
          wrap="wrap"
          justify="center"
          key={clothe.id}
          className="full-width f-wrap"
        >
          <Box m="5">
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={clothe.imag}
                  alt={clothe.description}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{clothe.name}</Heading>
                  <Text>{clothe.descripcion}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    ${clothe.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Comprar ahora
                  </Button>
                  <Button variant="ghost" colorScheme="blue">
                    Agregar al carro
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Box>
        </Flex>
      ))}
    </>
  );
};

export default Collection;