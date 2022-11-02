import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, HomeCarousel } from "../../Organisms";

const HomeTemplate = () => {
  return (
    <div className="HomeTemplate">
      <Header />
      <div className="HomeTemplate-carousel">
        <HomeCarousel />
      </div>
      <div className="HomeTemplate-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeTemplate;
