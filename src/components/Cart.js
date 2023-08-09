import { useContext } from "react";
import { CartContext } from "../utils/cartContext";
const Cart = () => {
  const { restaurantName } = useContext(CartContext);
  return <>{restaurantName == "" ? <div>Empty Cart</div> : <div>Cart</div>}</>;
};

export default Cart;
