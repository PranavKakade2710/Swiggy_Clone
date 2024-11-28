import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import useResInfo from "../Utils/useResInfo.js";
import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";
const RestaurantMenu = () => {
  const [showItems, setShowItems] = useState(true);
  const[showIndex,setShowIndex] =useState(null)
  const { resId } = useParams();
  const resInfo = useResInfo(resId);
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo.cards[4].groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (res) =>
        res.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  const nestedCategories =
    resInfo.cards[4].groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (res) =>
        res.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-4 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">
        {cuisines.join(", ")}-{costForTwoMessage}
      </h3>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowItems={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
