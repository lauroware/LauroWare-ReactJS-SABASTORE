import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { CartContext } from "../contexts/CartContext";

function App1() {
  useEffect(() => {
    mostrarAlerta();
  }, []);

  const mostrarAlerta = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Tu pedido a sido confirmado",
      showConfirmButton: false,
      timer: 4500,
    });
  };
}

export default App1;
