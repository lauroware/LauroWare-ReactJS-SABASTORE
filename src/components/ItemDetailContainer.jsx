import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/products.json"; // Importa los datos locales

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        // Busca el producto con el ID correspondiente en tu archivo local
        const product = productsData.productos.find((p) => p.id === id);

        if (product) {
          setItem(product);
        } else {
          console.log("No se encontró el producto");
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
