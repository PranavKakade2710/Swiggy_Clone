import { APP_LOGO } from "../Utils/const.js";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useNetworkStatus from "../Utils/useNetworkStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const isOnline = useNetworkStatus();

  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using Selector
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2 border border-solid border-black">
      <div className="logo-container">
        <img className="w-32" src={APP_LOGO} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online{isOnline ? " 🟢" : " 🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocary">InstaMart</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">🛒- ({cartItem.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
        <div className="pr-4 flex items-center">User : {loggedInUser}</div>
      </div>
    </div>
  );
};
export default Header;
