import React from "react";
import Slider from "react-slick";
import { Phim } from "../../types/quanLyPhimTypes";
import CardFilm from "../Molecules/CardFilm";
import CardFilm_Hover from "../Molecules/CardFilm_Hover";
import styleSlick from "./MultipleRowSlick.module.css";

type ChilProps = React.HTMLAttributes<HTMLDivElement> & {
  listMovie: Phim[];
};

const MultipleRowSlick: React.FC<ChilProps> = ({ listMovie }) => {
  const renderPhim = () => {
    return listMovie.slice(0, 12).map((item) => {
      return (
        <div key={item.maPhim} className="mt-2">
          {/* <CardFilm phim={item} /> */}
          <CardFilm_Hover phim={item} />
        </div>
      );
    });
  };

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styleSlick["slick-prev"]}`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      ></div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styleSlick["slick-prev"]}`}
        style={{ ...style, display: "block", left: "-50px" }}
        onClick={onClick}
      ></div>
    );
  }

  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 uppercase ">
          Phim đang chiếu
        </span>
      </button>
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 uppercase">
          Phim sắp chiếu
        </span>
      </button>
      <Slider {...settings}>{renderPhim()}</Slider>
    </div>
  );
};

export default MultipleRowSlick;
