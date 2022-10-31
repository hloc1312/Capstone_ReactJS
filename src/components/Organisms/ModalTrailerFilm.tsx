import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Phim } from "../../types/quanLyPhimTypes";
import "../Molecules/CardFlim_Hover.css";

type ChilProps = React.HTMLAttributes<HTMLDivElement> & {
  phimTrailer?: Phim;
};
const ModalTrailerFilm: React.FC<ChilProps> = ({ phimTrailer }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPause, setIsPause] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    setIsPause((state) => (state = true));
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsPause((state) => (state = false));
  };

  console.log("pause", isPause);

  return (
    <>
      <button className="px-2 py-1 rounded-sm" onClick={showModal}>
        <i className="fab fa-youtube mr-1 capitalize" />
        Trailer Phim
      </button>
      <Modal
        title={
          <span className="text-red-500">
            <i className="fab fa-youtube mr-1 capitalize" />
            Trailer Phim
          </span>
        }
        open={isModalOpen}
        onCancel={() => {
          handleCancel();
        }}
        footer={null}
        width={"1000px"}
        destroyOnClose={true}
      >
        <ReactPlayer
          url={phimTrailer?.trailer}
          playing={isModalOpen}
          controls
          width={"100%"}
          height={"500px"}
          loop
        />
      </Modal>
    </>
  );
};

export default ModalTrailerFilm;