import {
  Button,
  Container,
  Box,
  Text,
  Textarea,
  Center,
  Heading,
  Card,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";

const checkOut = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [cart, setCart, clearCart] = useContext(CartContext);
  const [isOrderIdGenerated, setIsOrderIdGenerated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("No pueden existir campos vacios");
    } else {
      addDoc(ordersCollection, order).then(({ id }) => {
        setOrderId(id);
        setIsOrderIdGenerated(true);
      });
    }
    setEmail(" ");
  };

  const db = getFirestore();
  const ordersCollection = collection(db, "orden");

  const order = {
    name,
    email,
    adress,
    cart,
  };

  return (
    <Container>
      <Card className="card-main">
        <div>
          <h1>Alta de orden</h1>

          <Image src="./src/assets/LOGO.png" />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nombre y Apellido"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Dirección de entrega"
              onChange={(e) => setAdress(e.target.value)}
            />
            <Button colorScheme="blue" type="submit">
              Enviar Información{" "}
            </Button>
            <br />
          </form>
          <p>Tu número de orden es: {orderId}</p>
          <p>Una vez generado, guardalo para seguir el estado de tu pedido.</p>
          <Link to={"/brief"}>
            <Button
              colorScheme="green"
              onClick={() => clearCart()}
              style={{ display: isOrderIdGenerated ? "block" : "none" }}
            >
              Finalizar
            </Button>
          </Link>
        </div>
      </Card>
    </Container>
  );
};

export default checkOut;
