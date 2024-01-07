import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  // Intenta obtener el carrito almacenado en el localStorage
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

  // Usa el estado inicial como el carrito almacenado o un array vacío si no hay nada almacenado
  const [cart, setCart] = useState(storedCart);

  const clearCart = () => setCart([]);

  const removeId = (id) => setCart(cart.filter((clothe) => clothe.id !== id));

  const updateQuantity = (id, newQuantity) => {
    const updatedCart = cart.map((clothe) => {
      if (clothe.id === id) {
        return {
          ...clothe,
          quantity: newQuantity,
        };
      }
      return clothe;
    });
    setCart(updatedCart);
  };

  useEffect(() => {
    // Almacena el carrito en el localStorage cada vez que cambia
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={[cart, setCart, clearCart, removeId, updateQuantity]}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
