import React from "react";
import Slider from "react-slick";
import { Phim } from "../../types/quanLyPhimTypes";
import CardFilm from "../Molecules/CardFilm";
import styleSlick from "./MultipleRowSlick.module.css";

type ChilProps = React.HTMLAttributes<HTMLDivElement> & {
  listMovie: Phim[];
};

const MultipleRowSlick: React.FC<ChilProps> = ({ listMovie }) => {
  const renderPhim = () => {
    return listMovie.map((item) => {
      return (
        <div key={item.maPhim} className={`${styleSlick["width-item"]}`}>
          <CardFilm phim={item} />
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
    rows: 1,
    slidesPerRow: 2,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <h2>Multiple Rows</h2>
      <Slider {...settings}>
        {renderPhim()}
        {renderPhim()}
        {renderPhim()}
        {renderPhim()}
        {renderPhim()}
        {renderPhim()}
        {renderPhim()}
        {renderPhim()}
        {renderPhim()}
      </Slider>
    </div>
  );
};

export default MultipleRowSlick;
