import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./component/About";
import Body from "./component/Body";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Login from "./component/Login";
import RestaurantMenu from "./component/RestaurantMenu";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/rastaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
  {
    path:"/login",
    element:<Login/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
