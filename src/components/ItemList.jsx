import Item from "./Item";
import { Container, SimpleGrid, Text } from "@chakra-ui/react";

const ItemList = ({ clothes }) => {
  return (
    <>
      <Container maxW="100%" className="main-catalogue">
        {clothes && clothes.length > 0 ? (
          <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 4 }} spacing={4}>
            {clothes.map((clothe) => (
              <Item
                key={clothe.id}
                id={clothe.id}
                imag={clothe.imag}
                name={clothe.name}
                description={clothe.description}
                price={clothe.price}
                stock={clothe.stock}
                category={clothe.category}
              />
            ))}
          </SimpleGrid>
        ) : (
          <Text textAlign="center" mt={4}>
            No hay productos disponibles.
          </Text>
        )}
      </Container>
    </>
  );
};

export default ItemList;
