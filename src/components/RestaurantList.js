import { useState, useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { ShimmerUI } from "./ShimmerUI";
import { Link } from "react-router-dom";

const RestaurantList = () => {
  const [resList, setData] = useState([]);
  const [filterResList, setFilterResList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    setData(jsonData?.data?.cards[2]?.data?.data?.cards);
    setFilterResList(jsonData?.data?.cards[2]?.data?.data?.cards);
    //console.log(jsonData?.data?.cards[2]?.data?.data?.cards);
  };

  const onSearchInput = (event) => {
    const input = event.target.value;
    setSearchInput(input);
    const filterResList = resList.filter((res) =>
      res.data.name.toLowerCase().includes(input.toLowerCase())
    );

    setFilterResList(filterResList);
  };

  if (filterResList.length <= 0) {
    return (
      <>
        <div className="shimmerUi-container">
          <ShimmerUI /> <ShimmerUI /> <ShimmerUI /> <ShimmerUI /> <ShimmerUI />
          <ShimmerUI /> <ShimmerUI /> <ShimmerUI />
          <ShimmerUI /> <ShimmerUI />
        </div>
      </>
    );
  }

  return (
    <>
      <input
        className="inputSearch"
        type="search"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => onSearchInput(e)}
      />
      <div className="card-container">
        {filterResList.map((res) => (
          <Link
            className="resList"
            key={res?.data?.id}
            to={"/restaurant/" + res?.data?.id}
          >
            <RestaurantCard data={res.data} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default RestaurantList;
