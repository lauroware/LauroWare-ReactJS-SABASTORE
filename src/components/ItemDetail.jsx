import {
    Center,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Button,
    CardFooter,
    Divider,
  } from "@chakra-ui/react";
  import clotheImage from "../assets/LOGO1.jpg";
  import { useParams } from "react-router-dom";
  import ItemCount from "./ItemCount";
  
  const ItemDetail = ({ clothes }) => {
    const { id } = useParams();
  
    const clotheFilter = clothes.filter((clothe) => clothe.id == id);
    return (
      <>
        {clotheFilter.map((clothe) => (
          <div key={clothe.id}>
            <Center p="1rem">
              <Card className="card-main">
                <CardBody>
                  <Image borderRadius="lg" src={clotheImage} />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{clothe.name}</Heading>
                    <Text color="blue.800" fontSize="l">
                      Descripción: {clothe.description}
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
                  <ItemCount />
                  <Center className="btn-center">
                    <Button variant="solid" colorScheme="blue">
                      Comprar
                    </Button>
                  </Center>
                </CardFooter>
              </Card>
            </Center>
          </div>
        ))}
      </>
    );
  };
  
  export default ItemDetail;