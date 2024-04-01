import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import UserContext from "../utils/UserContext";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

const App = () => {
  // const [userInfo, setUserInfo] = useState("");

  // useEffect(() => {
  //   // Make an API Call
  //   const data = {
  //     name: "Arjun Patil",
  //   };
  //   setUserInfo(data.name);
  // }, []);

  return (
    <Provider store={appStore}>
        <div className="app bg-zinc-50">
          <Header />
          <Outlet />
          <Footer />
        </div>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const main = document.getElementById("main");

const root = ReactDOM.createRoot(main);

root.render(<RouterProvider router={router} />);
