const RestaurantInfo = (props) => {
  const {
    name,
    cuisines,
    areaName,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
  } = props.resInfo;
  return (
    <>
      <div className="res-info-div">
        <div>
          <h3 className="res-heading">{name}</h3>
          <div className="res-cuisines">{cuisines.join(", ")}</div>
          <div className="res-cuisines">{areaName}</div>
        </div>
        <div className="res-rating">
          <div className="avg-rating">{avgRating}</div>
          <div className="total-avg-rating">{totalRatingsString}</div>
        </div>
      </div>
      <div className="cost-div">{costForTwoMessage}</div>
    </>
  );
};
export default RestaurantInfo;
