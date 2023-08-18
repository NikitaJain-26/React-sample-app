import { createContext } from "react";
export const CartContext = createContext({
  cartDetails: { restaurantName: "", resId: "", items: [] },
});
