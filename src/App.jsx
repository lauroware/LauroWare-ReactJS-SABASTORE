import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Cart from "./components/Cart";
import NavBa from "./components/NavBa";
import Checkout from "./components/Checkout";
import Brief from "./components/Brief";
import "./index.css";
import { CartProvider } from "./contexts/CartContext";
import { useEffect } from "react";
import Swal from "sweetalert2";
import LogoWhatapp from "./components/logowhatsapp.jsx";

function App() {
  useEffect(() => {
    mostrarAlerta();
  }, []);

  const mostrarAlerta = () => {
    Swal.fire({
      title: "Bienvenidos a Totinas Mayoristas",
      text: "Presiona Tienda para empezar. Puedes solicitar ayuda vía Whatsapp",
      imageUrl: "https://totinas.com.ar/assets/img/logo%20(2).png",
      imageHeight: 150,
      imageAlt: "A tall image",
    });
  };

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/welcome" element={<Welcome />} />
          <Route exact path="/catalogue" element={<ItemListContainer />} />
          <Route
            exact
            path="/category/:category"
            element={<ItemListContainer />}
          />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />

          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/brief" element={<Brief />} />
        </Routes>
        <LogoWhatapp />
        <NavBa />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
