import { useParams } from "react-router-dom";
import Accordion from "./Accordion";
import Offers from "./Offers";
import Item from "./Item";
import RestaurantInfo from "./RestaurantInfo";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import { useContext, useState } from "react";
import { CartContext } from "../utils/cartContext";
import findItemCount from "../utils/cartUpdate";

const RestaurantDetails = () => {
  const { restaurantId } = useParams();
  const data = useRestaurantDetails(restaurantId);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVeg, setIsVeg] = useState(false);
  const { cartDetails, setCartDetails } = useContext(CartContext);
  const [cart, setCart] = useState(cartDetails);
  const resDetails = data.resDetails;
  const offers = data.offers;
  const recommended = data.recommended.filter(
    (card) =>
      card?.card?.card["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const onIsVegClick = (e) => {
    const isVeg = e.target.checked;
    setIsVeg(isVeg);
  };
  const onAddItemClick = (item) => {
    let cart = cartDetails;
    if (cart.resId == "" || cart.resId == restaurantId) {
      cart.resId = restaurantId;
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
    }
    setCartDetails(cart);
    setCart(cart);
    console.log(cart);
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
    console.log(cart);
  };

  return (
    <>
      {resDetails == null ? null : <RestaurantInfo resInfo={resDetails} />}
      {offers.length <= 0 ? null : (
        <div className="flex border-b-[1px] w-9/12 mx-auto sm:w-11/12 sm:mx-4 border-gray-500 border-dotted sm:flex-wrap">
          {offers.map((offer) => {
            return <Offers key={offers?.info?.offerIds[0]} offer={offer} />;
          })}
        </div>
      )}
      <div className="w-9/12 mx-auto py-4">
        <label for="isVeg" className="pr-5 text-green-900 font-bold">
          Veg
        </label>
        <input type="checkbox" id="isVeg" onClick={(e) => onIsVegClick(e)} />
      </div>
      <div>
        {recommended.length <= 0
          ? null
          : recommended.map((card, index) => {
              return (
                <div key={card.card.card.title} className="item-container">
                  <Accordion
                    isActive={index == activeIndex ? true : false}
                    setIsActive={(i) => setActiveIndex(i ? null : index)}
                    title={
                      card.card.card.title +
                      " ( " +
                      card?.card?.card?.itemCards.length +
                      " )"
                    }
                    content={card?.card?.card?.itemCards.map((item) => {
                      if (isVeg) {
                        if (item.card.info.isVeg) {
                          return (
                            <Item
                              key={item.card.info.id}
                              card={item.card.info}
                              onAddItemClick={(item) => onAddItemClick(item)}
                              OnRemoveItemClick={(item) =>
                                OnRemoveItemClick(item)
                              }
                              count={findItemCount(cart, item.card.info)}
                            />
                          );
                        } else return null;
                      } else
                        return (
                          <Item
                            key={item.card.info.id}
                            card={item.card.info}
                            onAddItemClick={(item) => onAddItemClick(item)}
                            OnRemoveItemClick={(item) =>
                              OnRemoveItemClick(item)
                            }
                            count={findItemCount(cart, item.card.info)}
                          />
                        );
                    })}
                  />
                </div>
              );
            })}
      </div>
    </>
  );
};

export default RestaurantDetails;
