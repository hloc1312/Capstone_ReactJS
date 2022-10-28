import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Organisms/Footer";
import Header from "../../Organisms/Header";
import HomeCarousel from "../../Organisms/HomeCarousel";

const HomeTemplate = () => {
  return (
    <div>
      <Header />
      <HomeCarousel />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
