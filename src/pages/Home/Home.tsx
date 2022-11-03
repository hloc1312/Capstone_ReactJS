import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { HomeCarousel } from "../../components/Organisms";
import MultipleRowSlick from "../../components/Organisms/MultipleRowSlick/MultipleRowSlick";
import { RootState, useAppDispath } from "../../store/configStore";
import { getListMovie } from "../../store/quanLyPhim";
import { getListHeThongRapChieu } from "../../store/quanLyRap";
import HomeMenu from "./HomeMenu/HomeMenu";

const Home = () => {
  const { listMovie } = useSelector(
    (state: RootState) => state.quanLyPhimReducer
  );

  const { heThongRapChieu } = useSelector((state: RootState) => {
    return state.quanLyRapReducer;
  });
  const [searchParams, setSearchParams] = useSearchParams({
    isShowing: "false",
  });

  const phimSapChieu = () => {
    setSearchParams({ isShowing: "true" });
  };
  const phimDangChieu = () => {
    setSearchParams({ isShowing: "false" });
  };
  const dispatch = useAppDispath();
  useEffect(() => {
    dispatch(getListMovie());
    dispatch(getListHeThongRapChieu());
  }, []);

  return (
    <div>
      <HomeCarousel />

      {/* Start Home item */}
      <div className="container mx-auto p-4 pb-24">
        <section className="text-gray-600 body-font ">
          <div className="container px-5 py-24 mx-auto">
            <MultipleRowSlick
              listMovie={listMovie}
              phimSapChieu={phimSapChieu}
              phimDangChieu={phimDangChieu}
              isShowing={searchParams.get("isShowing") || ""}
            />
          </div>
        </section>

        {/* End Home Item */}

        <HomeMenu heThongRapChieu={heThongRapChieu} />
      </div>
    </div>
  );
};

export default Home;
