import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import NavBa from "./components/NavBa";
import Telefono from "./components/Telefono";
import Info from "./components/Info";
import Mail from "./components/Mail";
import Checkout from "./components/Checkout";
import Brief from "./components/Brief";
import "./index.css";
import { CartProvider } from "./contexts/CartContext";
import { useEffect } from "react";
import Swal from "sweetalert2";

function App() {
  useEffect(() => {
    mostrarAlerta();
  }, []);

  const mostrarAlerta = () => {
    Swal.fire({
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
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/info" element={<Info />} />
          <Route exact path="/telefono" element={<Telefono />} />
          <Route exact path="/mail" element={<Mail />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/brief" element={<Brief />} />
        </Routes>
        <NavBa />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
