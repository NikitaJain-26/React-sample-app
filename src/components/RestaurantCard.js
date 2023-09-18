import { IMAGE_URL } from "../utils/constant";

export const RestaurantCard = ({ data }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    deliveryTime,
    costForTwo,
  } = data;

  return (
    <>
      <div
        data-testid="restaurant-card"
        className="sm:w-[400px] 2xl:w-72 p-2 mt-4 mr-2 mb-2 ml-0 hover:cursor-pointer hover:shadow-md hover:outline-1"
      >
        <img alt={name} src={IMAGE_URL + cloudinaryImageId} />
        <h3 className="mt-1 font-semibold text-sm">{name}</h3>
        <div className="flex justify-between mt-1 text-xs">
          <div className="flex items-center bg-green-600">
            <div className="pl-2 text-white text-xs">{avgRating}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-3.5 h-3.5 m-1"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-gray-500">{deliveryTime} min</div>
          <div className="text-gray-500">₹ {costForTwo / 100} for two</div>
        </div>
        <div className="text-xs text-gray-500 pt-2">{cuisines.join(", ")}</div>
      </div>
    </>
  );
};

export const withPromomtedTag = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <div className="absolute text-white bg-black p-1 text-xs rounded-md mt-4">
          Promoted
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
