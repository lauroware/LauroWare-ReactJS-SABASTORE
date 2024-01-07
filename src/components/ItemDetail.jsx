import React, { useEffect, useState } from "react";
import {
  Center,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  CardFooter,
  Divider,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import ItemQuantitySelector from "./ItemQuantitySelector";
import productsData from "../data/products.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ItemDetail = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
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
    return null;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Center p="1rem">
      <Card className="card-main">
        <CardBody>
          <Slider {...settings}>
            <div>
              <img
                src={producto.imag}
                alt={`Image 1 of ${producto.name}`}
                style={{ borderRadius: "8px" }}
              />
            </div>
            <div>
              <img
                src={producto.imag2}
                alt={`Image 2 of ${producto.name}`}
                style={{ borderRadius: "8px" }}
              />
            </div>
            {/* Agrega más imágenes según sea necesario */}
          </Slider>

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
