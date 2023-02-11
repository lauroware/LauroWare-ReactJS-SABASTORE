import ItemList from "./ItemList";
import Data from "../data.json";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";
const ItemListContainer = () => {
  const { category } = useParams();

  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Data.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        resolve(Data);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();

  const catFilter = Data.filter((clothe) => clothe.category === category);
  return (
    <div>
      <Center bg="black" h="100px" color="white">
        <Heading as="h2" size="2xl">
          Indumentaria por categoria
        </Heading>
      </Center>
      {category ? <ItemList clothes={catFilter} /> : <ItemList clothes={Data} />}
    </div>
  );
};

export default ItemListContainer;
