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
      title:
        "Hemos recibido tu solicitud. Te contactaremos a la brevedad para ultimar detalles, fecha de envío y pago. Gracias!",
      showConfirmButton: false,
      timer: 4500,
    });
  };
}

export default App1;
