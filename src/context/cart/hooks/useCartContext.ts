import { useContext } from "react";
import { CartContext } from "../index"; // Adjust the import path to where CartContext is defined

export const useCartContext = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return cartContext;
};
