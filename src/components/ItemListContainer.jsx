import { Heading, Center, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import productsData from "../data/products.json";

const ItemListContainer = () => {
  const [clothes, setClothes] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    // Utiliza los datos de products.json
    setClothes(productsData.productos);
  }, []);

  const catFilter = clothes.filter((clothe) => clothe.category === category);

  return (
    <Box p={{ base: 2, md: 4, lg: 8 }}>
      <Center>
        <Heading as="h2" size="lg" mb={{ base: 2, md: 4 }}>
          {category ? `Categoría: ${category}` : "Todos los productos"}
        </Heading>
      </Center>
      <ItemList clothes={category ? catFilter : clothes} />
    </Box>
  );
};

export default ItemListContainer;
