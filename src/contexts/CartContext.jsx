import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const clearCart = () => setCart([]);
  const removeId = (id) => setCart(cart.filter((clothe) => clothe.id !== id));

  return (
    <CartContext.Provider value={[cart, setCart, clearCart, removeId]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
