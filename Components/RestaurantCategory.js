import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowItems }) => {
  HandelClick = () => {
    setShowItems();
  };
  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
        <div className="flex justify-between" onClick={HandelClick}>
          <span className="font-bold">
            {data.title}({data?.itemCards?.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
