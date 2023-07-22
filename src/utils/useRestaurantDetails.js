import { useEffect, useState } from "react";
import { RESTAURANT_DETAIL_URL } from "./constant";

const useRestaurantDetails = (restaurantId) => {
  const [resDetails, setResDetails] = useState(null);
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
    setResDetails(jsonData?.data?.cards[0]?.card?.card?.info);
    setOffers(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
    setRecommended(resDetail);
  };

  return { resDetails: resDetails, offers: offers, recommended: recommended };
};

export default useRestaurantDetails;
