import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const clothesCollection = collection(db, "indumentaria");
    getDocs(clothesCollection).then((querySnapshot) => {
      const clothes = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(clothes);
    });
  }, []);

  return <ItemDetail clothes={data} />;
};

export default ItemDetailContainer;
