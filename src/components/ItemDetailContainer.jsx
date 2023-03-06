import ItemDetail from "./ItemDetail";
import { useState } from "react";
import Data from "../data.json";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [clothes, setClothes] = useState([]);
  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Data.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        const clotheFilter = Data.filter((clothe) => clothe.id == id);
        resolve(clotheFilter);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
      setClothes(datosFetched);
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();
  return <ItemDetail clothes={Data} />;
};

export default ItemDetailContainer;
