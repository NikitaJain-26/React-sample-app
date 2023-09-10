import { useParams } from "react-router-dom";
import Offers from "./Offers";
import RestaurantInfo from "./RestaurantInfo";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import { useContext, useState } from "react";
import MenuItem from "./MenuItem";

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
                  <div className="w-9/12 mx-auto sm:w-11/12 sm:mx-4">
                    <div
                      className="flex justify-between bg-gray-100 my-2 py-2 px-2 hover:shadow-sm hover:shadow-gray-400 items-center hover:cursor-pointer"
                      onClick={() =>
                        setActiveIndex(activeIndex == index ? null : index)
                      }
                    >
                      <h4 className="font-semibold">
                        {card.card.card.title +
                          " ( " +
                          card?.card?.card?.itemCards.length +
                          " )"}
                      </h4>
                      <h4 className="font-semibold pr-4">
                        {activeIndex == index ? "\u2B06\uFE0F" : "\u2B07\uFE0F"}
                      </h4>
                    </div>
                    {activeIndex == index && (
                      <MenuItem
                        items={card?.card?.card?.itemCards}
                        resId={restaurantId}
                        restaurantName={resDetails.name}
                      />
                    )}
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default RestaurantDetails;
