import { useState, useEffect } from "react";
import RestaurantCard, { withPromomtedTag } from "./RestaurantCard";
import { ShimmerUI } from "./ShimmerUI";
import { Link } from "react-router-dom";
//import { RESTAURANT_API } from "../utils/constant";

const RestaurantList = () => {
  const [resList, setResList] = useState([]);
  const [filterResList, setFilterResList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const PromotedCard = withPromomtedTag(RestaurantCard);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    setResList(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterResList(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onSearchInput = (event) => {
    const input = event.target.value;
    setSearchInput(input);
    const filterResList = resList.filter((res) =>
      res.info.name.toLowerCase().includes(input.toLowerCase())
    );

    setFilterResList(filterResList);
  };

  return (
    <>
      <input
        data-testid="search"
        className="w-60 ml-4 p-1 border-solid border-darkgray border-2"
        type="search"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => onSearchInput(e)}
      />
      <div className="flex flex-wrap ml-4">
        {filterResList.length <= 0 ? (
          <div className="flex flex-wrap">
            <ShimmerUI /> <ShimmerUI /> <ShimmerUI /> <ShimmerUI />
            <ShimmerUI />
            <ShimmerUI /> <ShimmerUI /> <ShimmerUI />
            <ShimmerUI /> <ShimmerUI />
          </div>
        ) : (
          filterResList.map((res) => (
            <Link
              className="text-black no-underline"
              key={res?.info?.id}
              to={"/restaurant/" + res?.info?.id}
            >
              {res.info.promoted ? (
                <PromotedCard data={res.info} />
              ) : (
                <RestaurantCard data={res.info} />
              )}
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default RestaurantList;
