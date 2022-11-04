import React from "react";
import { Navigate, Outlet, redirect, useLocation } from "react-router-dom";
import { USER_LOGIN } from "../../../utils/config";

const CheckoutTemplate = () => {
  if (!localStorage.getItem("USER_LOGIN")) {
    return <Navigate to={"user/login"} />;
  }
  return (
    <div>
      CheckoutTemplate
      <Outlet />
    </div>
  );
};

export default CheckoutTemplate;
