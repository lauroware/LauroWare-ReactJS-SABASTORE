import {
  Center,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  Divider,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemQuantitySelector from "./ItemQuantitySelector";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = ({ clothes }) => {
  const { id } = useParams();

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const induRef = doc(db, "indumentaria", `${id}`);

    getDoc(induRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      } else {
        console.log("No such document!");
      }
    });
  }, []);

  const clotheFilter = clothes.filter((clothe) => clothe.id == id);

  return (
    <>
      {clotheFilter.map((clothe) => (
        <div key={clothe.id}>
          <Center p="1rem">
            <Card className="card-main">
              <CardBody>
                <Image borderRadius="lg" src={clothe.imag} />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{clothe.name}</Heading>
                  <Text color="blue.800" fontSize="l">
                    Descripcion: {clothe.description}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Categoria: {clothe.category}
                  </Text>
                  <Text color="red.600" fontSize="xl">
                    Stock: {clothe.stock}
                  </Text>
                  <Text color="green.600" fontSize="xl">
                    Precio: $ {clothe.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="card-footer">
                <ItemQuantitySelector
                  stock={clothe.stock}
                  id={clothe.id}
                  price={clothe.price}
                  name={clothe.name}
                />
              </CardFooter>
            </Card>
          </Center>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
