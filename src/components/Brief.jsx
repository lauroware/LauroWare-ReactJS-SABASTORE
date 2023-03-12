import { useEffect } from "react";
import Swal from "sweetalert2";

function App1() {
  useEffect(() => {
    mostrarAlerta();
  }, []);

  const mostrarAlerta = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Tu pedido a sido confirmado. Graciar por tu compra",
      showConfirmButton: false,
      timer: 4500,
    });
  };
}

export default App1;
