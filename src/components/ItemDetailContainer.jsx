import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const db = getFirestore();
        const itemDoc = doc(db, "indumentaria", id);
        const itemSnapshot = await getDoc(itemDoc);

        if (itemSnapshot.exists()) {
          const itemData = { ...itemSnapshot.data(), id: itemSnapshot.id };
          setItem(itemData);
        } else {
          console.log("No se encontró el ítem");
        }
      } catch (error) {
        console.error("Error al obtener el ítem:", error);
      }
    };

    fetchItem();
  }, [id]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
