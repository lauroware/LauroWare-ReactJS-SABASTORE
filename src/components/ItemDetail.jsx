// Importa los módulos necesarios
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
import productsData from "../data/products.json"; // Importa los datos locales

const ItemDetail = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        // Busca el producto con el ID correspondiente en tu archivo local
        const product = productsData.productos.find((p) => p.id === id);

        if (product) {
          setProducto(product);
        } else {
          console.log("No se encontró el producto");
        }
      } catch (error) {
        console.error("Error al obtener el ítem:", error);
      }
    };

    fetchItem();
  }, [id]);

  if (!producto) {
    return null; // O podrías mostrar un mensaje de carga
  }

  return (
    <Center p="1rem">
      <Card className="card-main">
        <CardBody>
          <Image borderRadius="lg" src={producto.imag} />
          <Stack mt="6" spacing="3">
            <Heading size="md">{producto.name}</Heading>
            <Text color="blue.800" fontSize="l">
              Descripcion: {producto.description}
            </Text>
            <Text color="blue.800" fontSize="l">
              Categoria: {producto.category}
            </Text>
            <Text color="red.600" fontSize="xl"></Text>
            <Text color="green.600" fontSize="xl">
              Precio: $ {producto.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter className="card-footer">
          <ItemQuantitySelector
            stock={producto.stock}
            id={id}
            price={producto.price}
            name={producto.name}
          />
        </CardFooter>
      </Card>
    </Center>
  );
};

export default ItemDetail;
