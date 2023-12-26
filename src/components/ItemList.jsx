// En ItemList.js
import React, { useState } from "react";
import Item from "./Item";
import { Container, SimpleGrid, Text } from "@chakra-ui/react";
import ItemDetail from "./ItemDetail"; // Importa el componente ItemDetail

const ItemList = ({ clothes }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Función para manejar el clic en un producto
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <>
      <Container maxW="100%" className="main-catalogue">
        {clothes && clothes.length > 0 ? (
          <>
            {/* Renderizar la lista de productos */}
            <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 4 }} spacing={4}>
              {clothes.map((clothe) => (
                <Item
                  key={clothe.id}
                  id={clothe.id}
                  imag={clothe.imag}
                  name={clothe.name}
                  description={clothe.description}
                  price={clothe.price}
                  stock={clothe.stock}
                  category={clothe.category}
                  // Llama a la función al hacer clic en un producto
                  onClick={() => handleProductClick(clothe)}
                />
              ))}
            </SimpleGrid>

            {/* Renderizar el detalle del producto seleccionado */}
            {selectedProduct && (
              <ItemDetail
                id={selectedProduct.id}
                imag={selectedProduct.imag}
                name={selectedProduct.name}
                description={selectedProduct.description}
                price={selectedProduct.price}
                stock={selectedProduct.stock}
                category={selectedProduct.category}
              />
            )}
          </>
        ) : (
          <Text textAlign="center" mt={4}>
            No hay productos disponibles.
          </Text>
        )}
      </Container>
    </>
  );
};

export default ItemList;
