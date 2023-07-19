import { IMAGE_URL } from "../utils/constant";

export const RestaurantCard = (props) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cusines,
    deliveryTime,
    costForTwo,
  } = props.data;
  return (
    <>
      <div className="card">
        <img
          className="resImage"
          alt={name}
          src={IMAGE_URL + cloudinaryImageId}
        />
        <h3 className="resHeading">{name}</h3>
        <div className="res-details">
          <div className="rating">{avgRating} star</div>
          <div className="timing">{deliveryTime} min</div>
          <div className="amountFoeTwo">{costForTwo / 100} for two</div>
        </div>
        <div className="cusines">{cusines}</div>
      </div>
    </>
  );
};

export default RestaurantCard;
