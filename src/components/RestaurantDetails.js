import { useEffect, useState } from "react";
import { RESTAURANT_DETAIL_URL, IMAGE_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import Accordion from "./Accordion";
import Offers from "./Offers";
import Item from "./Item";

const RestaurantDetails = () => {
  const { restaurantId } = useParams();
  const [resDetails, setResDetails] = useState([]);
  const [offers, setOffers] = useState([]);
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const data = await fetch(RESTAURANT_DETAIL_URL + restaurantId);
    const jsonData = await data.json();
    const resDetail =
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    setResDetails(resDetail);
    setOffers(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
    setRecommended(resDetail);
  };
  return (
    <>
      {offers.length <= 0 ? null : (
        <div className="offers-container">
          {offers.map((offer) => {
            return <Offers key={offers.restId} offer={offer} />;
          })}
        </div>
      )}
      <div>
        {recommended.length <= 0
          ? null
          : recommended.map((card, index) => {
              if (index >= 2) {
                return (
                  <div className="item-container">
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
              }
            })}
      </div>
    </>
  );
};

export default RestaurantDetails;
