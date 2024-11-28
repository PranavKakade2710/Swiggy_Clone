import { useState } from "react";
import { RES_LOGO } from "../Utils/const";
import { useDispatch } from "react-redux";
import { addItems } from "../Utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handelAddItems = (item) => {
    dispatch(addItems(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="fooditems"
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <div className="p-2 bg-white shadow-lg rounded-lg mx-16 ">
                <button onClick={() => handelAddItems(item)}>Add + </button>
              </div>
            </div>
            <img src={RES_LOGO + item?.card?.info?.imageId}></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
