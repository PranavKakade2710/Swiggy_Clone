import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "/Components/Header";
import Body from "/Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import { lazy, Suspense } from "react";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Cart from "./Components/Cart";

const InstaMart = lazy(() => import("./Components/InstaMart"));

const AppLayout = () => {
  const [userName, setUsername] = useState();

  useEffect(() => {
    const data = {
      name: "Pranav Kakade",
    };
    setUsername(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUsername }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocary",
        element: (
          <Suspense fallback={<h1>Loding.....</h1>}>
            <InstaMart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={appRouter} />
);
