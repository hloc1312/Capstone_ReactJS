import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import HomeTemplate from "../components/Layouts/HomeTemplate/HomeTemplate";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import News from "../pages/News/News";

const Routers = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeTemplate />,
      children: [
        {
          path: "/",
          element: <Navigate to={"/home"} />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "news",
          element: <News />,
        },
      ],
    },
  ]);
  return routing;
};

export default Routers;
