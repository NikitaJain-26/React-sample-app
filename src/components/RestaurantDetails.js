import { useParams } from "react-router-dom";
import Accordion from "./Accordion";
import Offers from "./Offers";
import Item from "./Item";
import RestaurantInfo from "./RestaurantInfo";
import useRestaurantDetails from "../utils/useRestaurantDetails";

const RestaurantDetails = () => {
  const { restaurantId } = useParams();
  const data = useRestaurantDetails(restaurantId);
  const resDetails = data.resDetails;
  const offers = data.offers;
  const recommended = data.recommended;

  return (
    <>
      {resDetails == null ? null : <RestaurantInfo resInfo={resDetails} />}
      {offers.length <= 0 ? null : (
        <div className="flex border-b-[1px] border-gray-500 border-dotted mx-4 sm:flex-wrap">
          {offers.map((offer) => {
            return <Offers key={offers.restId} offer={offer} />;
          })}
        </div>
      )}
      <div>
        {recommended.length <= 0
          ? null
          : recommended.map((card, index) => {
              return (
                <div key={index} className="item-container">
                  <Accordion
                    title={
                      card.card.card.hasOwnProperty("title")
                        ? card.card.card.title
                        : null
                    }
                    content={
                      card.card.card.hasOwnProperty("itemCards")
                        ? card?.card?.card?.itemCards.map((item) => {
                            return (
                              <Item
                                key={item.card.info.id}
                                card={item.card.info}
                              />
                            );
                          })
                        : null
                    }
                  />
                </div>
              );
            })}
      </div>
    </>
  );
};

export default RestaurantDetails;
