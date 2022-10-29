import React from "react";
import { useSelector } from "react-redux";
import CardFilm from "../../components/Molecules/CardFilm";
import MultipleRowSlick from "../../components/Organisms/MultipleRowSlick";
import { RootState } from "../../store/configStore";
import HomeMenu from "./HomeMenu/HomeMenu";

const Home = () => {
  const { listMovie } = useSelector(
    (state: RootState) => state.quanLyPhimReducer
  );

  const renderPhim = () => {
    return listMovie.map((item) => {
      return <CardFilm key={item.maPhim} />;
    });
  };
  return (
    <div className="container mx-auto">
      <MultipleRowSlick />
      {/* Start Home item */}
      <section className="text-gray-600 body-font">
        <div className="container py-24 mx-auto">
          <div className="flex flex-wrap -m-4">{renderPhim()}</div>
        </div>
      </section>

      {/* End Home Item */}

      <HomeMenu />
    </div>
  );
};

export default Home;
