import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";
const Cart = () => {
  const cart = useSelector((store) => store.cart);
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
          <MenuItem
            items={cart.items}
            resId={cart.resId}
            restaurantName={cart.restaurantName}
          />
        </div>
      )}
    </>
  );
};

export default Cart;
