import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MultipleRowSlick from "../../components/Organisms/MultipleRowSlick";
import { RootState, useAppDispath } from "../../store/configStore";
import { getListMovie } from "../../store/quanLyPhim";
import HomeMenu from "./HomeMenu/HomeMenu";

const Home = () => {
  const { listMovie } = useSelector(
    (state: RootState) => state.quanLyPhimReducer
  );
  const dispatch = useAppDispath();
  useEffect(() => {
    dispatch(getListMovie());
  }, []);

  return (
    <div>
      {/* Start Home item */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <MultipleRowSlick listMovie={listMovie} />
        </div>
      </section>

      {/* End Home Item */}

      <HomeMenu />
    </div>
  );
};

export default Home;
