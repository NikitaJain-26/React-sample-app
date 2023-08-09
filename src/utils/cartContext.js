import { createContext } from "react";
export const CartContext = createContext({
  restaurantName: "",
  resId: "",
  items: [],
});
