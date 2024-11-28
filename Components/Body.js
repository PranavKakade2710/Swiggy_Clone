import RestaurantCard, { withOpenLable } from "../Components/RestaurantCard.js";
import { useState, useEffect, useContext  } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useNetworkStatus from "../Utils/useNetworkStatus";
import UserContext from "../Utils/UserContext";
const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredlistofRestaurants, setfilteredlistofRestaurants] = useState(
    []
  );
  const [searchText, setsearchText] = useState("");

  const RestaurantsOpen = withOpenLable(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json)
    setlistofRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredlistofRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const isOnline = useNetworkStatus();
  if (isOnline === false) {
    return (
      <h1>Looks like you're offline!! Please check your Internet connection</h1>
    );
  }

  const{loggedInUser,setUsername} = useContext(UserContext)

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search px-4 py-2 flex items-center">
          <input
          data-testid="searchInput"
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-200 m-4 hover:bg-green-100 active:bg-green-300 rounded-lg"
            onClick={() => {
              const filteredSearch = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredlistofRestaurants(filteredSearch);
            }}
          >
            Search
          </button>
        </div>
        <div className="px-4 py-2 flex items-center">
          <button
          data-testid="topRestaurantBtn"
            className="px-4 py-2 bg-gray-200 m-4 hover:bg-gray-100 active:bg-gray-300 rounded-lg"
            onClick={() => {
              const filteredList = listofRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              // console.log(filteredList);
              setfilteredlistofRestaurants(filteredList);
            }}
          >
            Top Restaurants
          </button>
        </div>
        <div className="px-4 py-2 flex items-center">
          <label>Username : </label>
          <input
            className="border border-black px-2"
            value={loggedInUser}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        {filteredlistofRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
            className="group block transform transition-transform duration-300 hover:scale-105"
          >
            {restaurant.info.isOpen ? (
              <RestaurantsOpen resdata={restaurant} />
            ) : (
              <RestaurantCard resdata={restaurant} />
            )}
          </Link>
        ))}
        {/* <RestaurantCard resdata={resList[0]} /> */}
      </div>
    </div>
  );
};

export default Body;
