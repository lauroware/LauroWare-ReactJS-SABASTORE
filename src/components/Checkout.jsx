import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Box,
  Textarea,
  Center,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";

const checkOut = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cart, setCart, clearCart] = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("No pueden existir campos vacios");
    } else {
      addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    }
    setEmail(" ");
  };

  const db = getFirestore();
  const ordersCollection = collection(db, "orden");

  const order = {
    name,
    email,
  };

  return (
    <div>
      <h1>Alta de orden</h1>

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
        <button type="submit">Enviar Información </button>
        <br />
      </form>
      <p>Order Id: {orderId}</p>
      <Link to={"/brief"}>
        <Button colorScheme="green" onClick={() => clearCart()}>
          Finalizar
        </Button>
      </Link>
    </div>
  );
};

export default checkOut;
