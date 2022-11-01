import React from "react";
import noImages from "../../assets/noImages.jpg";
import { useAppDispath } from "../../store/configStore";
import { quanLyPhimActions } from "../../store/quanLyPhim";
import { Phim } from "../../types/quanLyPhimTypes";
import ModalTrailerFilm from "../Organisms/ModalTrailerFilm";
import "./CardFlim_Hover.css";

type ChilProps = React.HTMLAttributes<HTMLDivElement> & {
  phim: Phim;
};
const CardFilm_Hover: React.FC<ChilProps> = ({ phim }) => {
  return (
    <div className="cardFilmHover mx-[8px]">
      <img src={phim ? phim.hinhAnh : noImages} alt={phim.tenPhim} />
      <div className="descriptions">
        <h1>{phim.tenPhim}</h1>
        <p>
          {phim.moTa.length > 300 ? (
            <span>{phim.moTa.slice(0, 300)}...</span>
          ) : (
            <span>{phim.moTa}</span>
          )}
        </p>
        <div className="flex justify-between">
          {/* <button className="px-2 py-1 rounded-sm">
            <i className="fab fa-youtube mr-1 capitalize" />
            Trailer Phim
          </button> */}
          <ModalTrailerFilm phimTrailer={phim} />
          <button className="px-2 py-1 ml-2 capitalize !bg-green-500 rounded-sm">
            đặt vé
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardFilm_Hover;
