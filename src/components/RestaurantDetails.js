import { useParams } from "react-router-dom";
import Accordion from "./Accordion";
import Offers from "./Offers";
import Item from "./Item";
import RestaurantInfo from "./RestaurantInfo";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import { useState } from "react";

const RestaurantDetails = () => {
  const { restaurantId } = useParams();
  const data = useRestaurantDetails(restaurantId);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVeg, setIsVeg] = useState(false);
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

  return (
    <>
      {resDetails == null ? null : <RestaurantInfo resInfo={resDetails} />}
      {offers.length <= 0 ? null : (
        <div className="flex border-b-[1px] w-9/12 mx-auto sm:w-11/12 sm:mx-4 border-gray-500 border-dotted sm:flex-wrap">
          {offers.map((offer) => {
            return <Offers key={offers.restId} offer={offer} />;
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
                              onlyVeg={isVeg}
                              card={item.card.info}
                            />
                          );
                        } else return null;
                      } else
                        return (
                          <Item
                            key={item.card.info.id}
                            onlyVeg={isVeg}
                            card={item.card.info}
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
