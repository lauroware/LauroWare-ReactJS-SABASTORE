import Item from "./Item";
import { Container } from "@chakra-ui/react";
const ItemList = ({ clothes }) => {
  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
        {clothes?.map((clothe) => (
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
      </Container>
    </>
  );
};

export default ItemList;