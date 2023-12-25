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
import jsPDF from "jspdf";

const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [observations, setObservations] = useState("");
  const [cart, setCart, clearCart] = useContext(CartContext);
  const [isOrderIdGenerated, setIsOrderIdGenerated] = useState(false);

  const generatePDF = () => {
    const pdf = new jsPDF();
    pdf.setFontSize(14);

    // Información del cliente
    pdf.text(
      `TOTINAS agradece tu solitud. Verifica la información ingresada:`,
      20,
      20
    );
    pdf.text(`Nombre: ${name}`, 20, 40);
    pdf.text(`Email: ${email}`, 20, 50);
    pdf.text(`Teléfono: ${phone}`, 20, 60);
    pdf.text(`Dirección de entrega: ${address}`, 20, 70);
    pdf.text(`Observaciones: ${observations}`, 20, 80);

    // Información del carrito
    pdf.text("Detalle del Carrito:", 20, 100);
    let yOffset = 110;
    cart.forEach((item, index) => {
      pdf.text(
        `${index + 1}. ${item.name} x ${item.quantity}. Precio: $${
          item.price
        }.- c/u`,
        30,
        yOffset + index * 10
      );
    });

    // Calcular la suma total del carrito
    const totalAmount = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    // Agregar la suma total al PDF
    pdf.text(
      `Monto total del pedido: $${totalAmount.toFixed(2)}`,
      20,
      yOffset + cart.length * 10 + 10
    );

    // Guarda el PDF con un nombre específico
    pdf.save("order.pdf");
  };

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
          phone,
          address,
          observations,
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
      <Card p="4" textAlign="center">
        <Heading as="h1" mb="4">
          Alta de Orden
        </Heading>
        <Image
          src="https://lauroware.github.io/portfolio/assets/img/portfolio/portfolio-1.jpg"
          alt="Logo"
          mb="4"
        />

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
            <FormLabel>Dirección de Entrega</FormLabel>
            <Input
              type="text"
              placeholder="Dirección de Entrega"
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
          <Button colorScheme="blue" type="submit" mb="4">
            Enviar Información
          </Button>
        </form>

        {isOrderIdGenerated && (
          <div>
            <p>Tu número de orden es: {orderId}</p>
            <p>Guárdalo para seguir el estado de tu pedido.</p>
            <Button colorScheme="blue" onClick={generatePDF} mb="4">
              Descargar PDF
            </Button>
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
