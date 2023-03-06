import { Heading, Center } from "@chakra-ui/react";
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
    <div>
      {category ? (
        <ItemList clothes={catFilter} />
      ) : (
        <ItemList clothes={clothes} />
      )}
    </div>
  );
};

export default ItemListContainer;
