import { IMAGE_URL } from "../utils/constant";
import { useState } from "react";

const Item = ({ card, onAddItemClick, count, OnRemoveItemClick }) => {
  const { name, description, price, imageId, isVeg } = card;
  const [itemCount, SetItemCount] = useState(count);
  const onAddClick = (card) => {
    SetItemCount(itemCount + 1);
    onAddItemClick(card);
  };

  const onRemoveClick = (card) => {
    SetItemCount(itemCount - 1);
    OnRemoveItemClick(card);
  };
  return (
    <>
      <div className="flex sm:w-full min-h-[145] justify-between px-2 py-0 my-2 text-sm hover:shadow-sm hover:shadow-gray-400 border-b-[1px] border-gray-200 border-solid">
        <div className="w-9/12">
          {isVeg ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="green"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 01-1.313-1.313V9.564z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="red"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 01-1.313-1.313V9.564z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <h3 className="font-bold">{name}</h3>
          <div className="font-semibold">₹ {price / 100}</div>
          <p className="py-2 text-gray-500 w-10/12 ">{description}</p>
        </div>
        <div className="">
          {itemCount == 0 ? (
            <button
              className="absolute mt-[6rem] mx-4 p-1 px-2 w-20 text-sm text-green-700 rounded-sm shadow-lg shadow-gray-300 hover:cursor-pointer"
              onClick={() => onAddClick(card)}
            >
              Add +
            </button>
          ) : (
            <div className="flex absolute mt-[6rem] mx-4 p-1 px-2 w-20 justify-between text-sm text-green-700 rounded-sm shadow-lg shadow-gray-300">
              <button
                className="p-1 px-2 w-2 "
                onClick={() => onRemoveClick(card)}
              >
                -
              </button>
              <div className="p-1 px-2 w-2">{itemCount}</div>
              <button className="p-1 px-2 w-2" onClick={() => onAddClick(card)}>
                +
              </button>
            </div>
          )}
          <img className="w-32" src={IMAGE_URL + imageId} />
        </div>
      </div>
    </>
  );
};

export default Item;
