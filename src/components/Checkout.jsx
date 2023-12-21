import React, { useState, useContext } from "react";
import {
  Button,
  Container,
  Card,
  Image,
  FormControl,
  FormLabel,
  Input,
  Center,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // Nuevo campo para teléfono
  const [address, setAddress] = useState("");
  const [observations, setObservations] = useState(""); // Nuevo campo para observaciones
  const [cart, setCart, clearCart] = useContext(CartContext);
  const [isOrderIdGenerated, setIsOrderIdGenerated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === "" || email === "") {
      alert("No pueden existir campos vacíos");
    } else {
      try {
        const db = getFirestore();
        const ordersCollection = collection(db, "orden");

        const order = {
          name,
          email,
          phone, // Agregado el campo de teléfono
          address,
          observations, // Agregado el campo de observaciones
          cart,
        };

        const docRef = await addDoc(ordersCollection, order);
        setOrderId(docRef.id);
        setIsOrderIdGenerated(true);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  return (
    <Container>
      <Card className="card-main">
        <Center>
          <Heading as="h1">Alta de orden</Heading>
        </Center>
        <Image src="src/assets/LOGO.png" />
        <form onSubmit={handleSubmit}>
          <FormControl mb="4">
            <FormLabel>Nombre y Apellido</FormLabel>
            <Input
              type="text"
              placeholder="Nombre y Apellido"
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>E-mail</FormLabel>
            <Input
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Teléfono</FormLabel>
            <Input
              type="tel"
              placeholder="Teléfono"
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Dirección de entrega</FormLabel>
            <Input
              type="text"
              placeholder="Dirección de entrega"
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Observaciones</FormLabel>
            <Input
              type="text"
              placeholder="Observaciones"
              onChange={(e) => setObservations(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="blue" type="submit">
            Enviar Información
          </Button>
        </form>
        {isOrderIdGenerated && (
          <div>
            <p>Tu número de orden es: {orderId}</p>
            <p>Guárdalo para seguir el estado de tu pedido.</p>
            <Link to="/brief">
              <Button colorScheme="green" onClick={clearCart}>
                Finalizar
              </Button>
            </Link>
          </div>
        )}
      </Card>
    </Container>
  );
};

export default Checkout;
