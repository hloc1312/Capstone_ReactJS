import React from "react";
import { useRoutes } from "react-router-dom";

const Routers = () => {
  const routing = useRoutes([
    {
      path: "/",
    },
  ]);
  return routing;
};

export default Routers;
