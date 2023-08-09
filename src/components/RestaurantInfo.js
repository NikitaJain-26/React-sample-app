const RestaurantInfo = ({ resInfo }) => {
  const {
    name,
    cuisines,
    areaName,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
  } = resInfo;
  return (
    <>
      <div className="flex justify-between sm:w-11/12 py-2 mx-auto sm:mx-4 my-3 border-b-[1px] border-gray-300 w-9/12">
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <div className="text-gray-500 text-xs">{cuisines.join(", ")}</div>
          <div className="text-gray-500 text-xs">{areaName}</div>
        </div>
        <div className="border border-solid border-gray-300 rounded-md p-1">
          <div className="py-1 px-5 text-green-700 font-bold flex border-b-[1px] border-gray-300 border-solid">
            <div> {avgRating}</div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="green"
              class="w-3.5 h-3.5 m-1"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="text-xs text-gray-500 font-semibold px-1 py-1">
            {totalRatingsString}
          </div>
        </div>
      </div>
      <div className="text-gray-500 flex my-2 w-9/12 mx-auto sm:w-full sm:mx-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="pl-2 fond-bolder ">{costForTwoMessage}</div>
      </div>
    </>
  );
};
export default RestaurantInfo;
