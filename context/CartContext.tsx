import { createContext, Dispatch, SetStateAction } from "react";

// 1 Création du context
export const CartContext = createContext<{
  cartItems: [];
  setCartItems: Dispatch<SetStateAction<[]>>;
}>({
  cartItems: [],
  setCartItems: () => {}
});