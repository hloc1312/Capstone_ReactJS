import React from "react";
import noImages from "../../assets/noImages.jpg";
import { Phim } from "../../types/quanLyPhimTypes";
import ModalTrailerFilm from "../Organisms/ModalTrailerFilm/ModalTrailerFilm";
import "./CardFlim_Hover.css";

type ChilProps = React.HTMLAttributes<HTMLDivElement> & {
  phim: Phim;
};
const CardFilm_Hover: React.FC<ChilProps> = ({ phim }) => {
  return (
    <div className="cardFilmHover mx-[8px]">
      <img src={phim ? phim.hinhAnh : noImages} alt={phim.tenPhim} />
      <div className="descriptions flex flex-col justify-between">
        <h1>{phim.tenPhim}</h1>
        <p>
          {phim.moTa.length > 200 ? (
            <span>{phim.moTa.slice(0, 200)}...</span>
          ) : (
            <span>{phim.moTa}</span>
          )}
        </p>
        <ModalTrailerFilm phimTrailer={phim} />
        <div className="flex justify-between">
          {/* <button className="px-2 py-1 rounded-sm">
            <i className="fab fa-youtube mr-1 capitalize" />
            Trailer Phim
          </button> */}
          <button
            type="button"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-sm capitalize text-sm px-[10px] py-[10px] text-center "
          >
            xem chi tiết
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-sm capitalize text-sm px-[10px] py-[10px]  text-center "
          >
            đặt vé
          </button>
          {/* <button className="px-2 py-1 ml-2 capitalize !bg-green-500 rounded-sm">
            đặt vé
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CardFilm_Hover;
