import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={[cart, setCart, clearCart]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
