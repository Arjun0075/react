import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter , Outlet } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";



const App = () => {
  return (
    <div className="app bg-zinc-50">
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Body/>, 
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path : "/restaurant/:resId",
        element: <RestaurantMenu/>
      }
    ]
  }

]);

const main = document.getElementById("main");

const root = ReactDOM.createRoot(main);

root.render(<RouterProvider router={router} />);
