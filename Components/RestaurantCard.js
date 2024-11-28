import { useContext } from "react";
import { RES_LOGO } from "../Utils/const";
import UserContext from "../Utils/UserContext";
import Header from "./Header";
const RestaurantCard = ({ resdata }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRatingString,
    sla,
  } = resdata?.info;
  return (
    <div
    data-testid="rescard"
    className="p-4 w-[250px] bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-[150px] object-cover rounded-t-lg"
        alt="res-logo"
        src={RES_LOGO + cloudinaryImageId}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate group-hover:text-indigo-500">
          {name}
        </h3>
        <h4 className="text-sm text-gray-500 mt-2 truncate">
          {cuisines.join(", ")}
        </h4>
        <h4 className="text-sm text-gray-600 mt-1">{costForTwo}</h4>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-1 text-sm text-yellow-500">
            <span>⭐</span>
            <span>{avgRatingString}</span>
          </div>
          <h4 className="text-sm text-gray-500">{sla?.slaString}</h4>
        </div>
      </div>
    </div>
  );
};

export const withOpenLable = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-lg m-2 p-2">
          Open Now
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
