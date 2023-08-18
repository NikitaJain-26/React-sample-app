import { useContext, useState } from "react";
import Item from "./Item";
import { CartContext } from "../utils/cartContext";
import findItemCount from "../utils/cartUpdate";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cartDetails, setCartDetails } = useContext(CartContext);
  const [cart, setCart] = useState(cartDetails);
  const onAddItemClick = (item) => {
    let cart = cartDetails;
    let initialcount = findItemCount(cart, item);
    if (initialcount == 0) {
      cart.items.push({ count: initialcount + 1, item: item });
    } else {
      let updatedCart = cart.items.map((i) => {
        if (i.item.id == item.id) {
          i.count = i.count + 1;
        }
        return i;
      });
      cart.items = updatedCart;
    }
    setCartDetails(cart);
    setCart(cart);
  };

  const OnRemoveItemClick = (item) => {
    let cart = cartDetails;
    let initialcount = findItemCount(cart, item);
    if (initialcount > 1) {
      let updatedCart = cart.items.map((i) => {
        if (i.item.id == item.id) {
          i.count = i.count - 1;
        }
        return i;
      });
      cart.items = updatedCart;
    }
    if (initialcount == 1) {
      let itemIndex;
      cart.items.map((i, index) => {
        if (i.item.id == item.id) {
          i.count = i.count - 1;
          itemIndex = index;
        }
        return i;
      });
      cart.items.splice(itemIndex, 1);
    }
    if (cart.items.length == 0) {
      cart.resId = "";
    }

    setCartDetails(cart);
    setCart(cart);
  };
  return (
    <>
      {cart.resId == "" ? (
        <div className="w-6/12 m-auto p-8 text-center">
          <div className="font-bold text-gray-700 mt-20 mb-4">
            Your cart is empty
          </div>
          <div className="text-gray-500 mb-6">
            You can go to home page to view more restaurants
          </div>
          <Link to="/">
            <button className="bg-orange-400 p-2 rounded-sm text-white font-bold">
              See restaurant near you
            </button>
          </Link>
        </div>
      ) : (
        <div className="w-9/12 mx-auto">
          {cart.items.map((item) => {
            return (
              <Item
                key={item.item.id}
                card={item.item}
                onAddItemClick={(item) => onAddItemClick(item)}
                count={findItemCount(cart, item.item)}
                OnRemoveItemClick={(item) => OnRemoveItemClick(item)}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Cart;
