import React from "react";
import { useRoutes } from "react-router-dom";
import HomeTemplate from "../components/Layouts/HomeTemplate/HomeTemplate";
import Home from "../pages/Home/Home";

const Routers = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeTemplate />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return routing;
};

export default Routers;
