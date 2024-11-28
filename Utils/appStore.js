import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import Header from "../Components/Header";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
