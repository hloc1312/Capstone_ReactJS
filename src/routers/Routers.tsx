import { Spin } from "antd";
import React, { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import CheckoutTemplate from "../components/Layouts/CheckoutTemplate/CheckoutTemplate";
import HomeTemplate from "../components/Layouts/HomeTemplate/HomeTemplate";
import UserTemplate from "../components/Layouts/UserTemplate/UserTemplate";
import Checkout from "../pages/Checkout/Checkout";
import Contact from "../pages/Contact/Contact";
import Detail from "../pages/Detail/Detail";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import News from "../pages/News/News";

const CheckoutTemplateLazy = lazy(
  () => import("../components/Layouts/CheckoutTemplate/CheckoutTemplate")
);

const HomeTemplateLazy = lazy(
  () => import("../components/Layouts/HomeTemplate/HomeTemplate")
);

const UserTemplateLazy = lazy(
  () => import("../components/Layouts/UserTemplate/UserTemplate")
);

const Routers = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: (
        <Suspense
          fallback={
            <div
              className="example"
              style={{
                margin: "20px 0",
                marginBottom: "20px",
                padding: "30px 50px",
                textAlign: "center",
                borderRadius: "4px",
              }}
            >
              <Spin />
            </div>
          }
        >
          <HomeTemplateLazy />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: <Navigate to={"home"} />,
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

        {
          path: "detail/:id",
          element: <Detail />,
        },
      ],
    },
    {
      path: "/checkout",
      element: (
        <Suspense
          fallback={
            <div
              className="example"
              style={{
                margin: "20px 0",
                marginBottom: "20px",
                padding: "30px 50px",
                textAlign: "center",
                borderRadius: "4px",
              }}
            >
              <Spin />
            </div>
          }
        >
          <CheckoutTemplateLazy />
        </Suspense>
      ),
      children: [
        {
          path: ":id",
          element: <Checkout />,
        },
      ],
    },
    {
      path: "/user",
      element: (
        <Suspense
          fallback={
            <div
              className="example"
              style={{
                margin: "20px 0",
                marginBottom: "20px",
                padding: "30px 50px",
                textAlign: "center",
                borderRadius: "4px",
              }}
            >
              <Spin />
            </div>
          }
        >
          <UserTemplateLazy />
        </Suspense>
      ),
      children: [
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);
  return routing;
};

export default Routers;
