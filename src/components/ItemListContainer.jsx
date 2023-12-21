import { Heading, Center, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [clothes, setClothes] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const clothesCollection = collection(db, "indumentaria");
    getDocs(clothesCollection).then((querySnapshot) => {
      const clothes = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setClothes(clothes);
    });
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
