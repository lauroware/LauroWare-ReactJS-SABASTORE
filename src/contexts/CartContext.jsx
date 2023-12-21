import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
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

  return (
    <CartContext.Provider
      value={[cart, setCart, clearCart, removeId, updateQuantity]}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
