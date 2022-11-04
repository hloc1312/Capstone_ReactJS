import React, { useEffect, useState } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../assets/styles/circle.css";
import { Rate, Tabs } from "antd";
import { useSelector } from "react-redux";
import { RootState, useAppDispath } from "../../store/configStore";
import { NavLink, useParams } from "react-router-dom";
import { getListLichChieuTheoPhim } from "../../store/quanLyRap";
import moment from "moment";
import "./detail.css";
import {
  getThongTinPhimLocalStorage,
  thongTinPhimLocalStorage,
} from "../../utils/localStore";
type TabPosition = "left";
const Detail = () => {
  const [tabPosition, setTabPosition] = useState<TabPosition>("left");
  const { filmDetail } = useSelector((state: RootState) => {
    return state.quanLyPhimReducer;
  });

  // Lấy thông tin param từ url
  const params = useParams();

  // Lưu thông tin phim lên localStorage
  const setThongTinPhim = thongTinPhimLocalStorage;

  // Lấy thông tin phim từ localStorage
  const getThongTinPhim = getThongTinPhimLocalStorage;

  const dispatch = useAppDispath();
  console.log({ filmDetail });
  useEffect(() => {
    dispatch(getListLichChieuTheoPhim(params.id || ""));
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${filmDetail?.hinhAnh})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="Detail"
    >
      <CustomCard
        className="min-h-screen !pt-[150px]"
        effectColor="#000" // required
        color="#000" // default color is white
        blur={6} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="grid grid-cols-12">
          <div className="col-span-5 col-start-3">
            <div className="grid grid-cols-3">
              <div
                style={{
                  backgroundImage: `url(${filmDetail?.hinhAnh})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="h-[300px] col-span-1"
              >
                <img
                  src={filmDetail?.hinhAnh}
                  alt={filmDetail?.tenPhim}
                  className="opacity-0"
                />
              </div>
              <div className="col-span-2 ml-4 flex justify-center flex-col text-white">
                <p
                  className="text-sm"
                  style={{
                    textShadow: "5px 5px 10px #000",
                  }}
                >
                  Ngày khởi chiếu:{" "}
                  {moment(filmDetail?.ngayKhoiChieu).format("DD.MM.YYYY")}
                </p>
                <p
                  className="text-4xl uppercase font-bold "
                  style={{
                    textShadow: "5px 5px 10px #000",
                  }}
                >
                  {filmDetail?.tenPhim}
                </p>
                <p
                  className="drop-shadow-lg"
                  style={{
                    textShadow: "5px 5px 10px #000",
                  }}
                >
                  {filmDetail?.moTa}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div
              className="flex flex-col items-center"
              style={{
                textShadow: "5px 5px 10px #000",
              }}
            >
              <h1 className="text-3xl text-green-500 font-bold mr-10 text-center mb-4">
                Đánh giá
                <br />
                <Rate
                  disabled
                  value={filmDetail!.danhGia / 2}
                  className="text-[18px]"
                />
              </h1>

              <div className={`c100 p${filmDetail!.danhGia * 10} big`}>
                <span>{filmDetail!.danhGia * 10}%</span>
                <div className="slice">
                  <div className="bar" />
                  <div className="fill" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Load lịch chiếu phim */}
        <Tabs
          className=" w-2/3 container !mx-auto"
          defaultActiveKey="1"
          centered
          items={new Array(3).fill(null).map((_, i) => {
            const id = String(i + 1);
            if (id === "1") {
              return {
                label: <span className="labelTabs">Lịch chiếu</span>,
                key: id,
                children: (
                  <div className="mt-5 bg-white p-5">
                    <Tabs
                      tabPosition={tabPosition}
                      items={filmDetail?.heThongRapChieu?.map((heThongRap) => {
                        return {
                          label: (
                            <div className="flex items-center justify-center">
                              <img
                                src={heThongRap.logo}
                                alt={heThongRap.tenHeThongRap}
                                className="rounded-full w-[50px] "
                              />
                              <p className="ml-2 text-center mb-0">
                                {heThongRap.tenHeThongRap}
                              </p>
                            </div>
                          ),
                          key: heThongRap.maHeThongRap,
                          children: heThongRap.cumRapChieu.map((cumRap) => {
                            return (
                              <div key={cumRap.maCumRap} className="mt-5">
                                <div className="flex">
                                  <img
                                    src={cumRap.hinhAnh}
                                    alt={cumRap.tenCumRap}
                                    className="w-[50px]"
                                  />
                                  <div className="ml-2">
                                    <span className="text-[18px] block font-bold">
                                      {cumRap.tenCumRap}
                                    </span>
                                    <span className="opacity-80">
                                      {cumRap.diaChi}
                                    </span>
                                  </div>
                                </div>
                                <div className="thong-tin-ngay-gio-chieu grid grid-cols-4 gap-4 mt-4">
                                  {cumRap.lichChieuPhim
                                    ?.slice(0, 12)
                                    ?.map((lichChieu) => {
                                      return (
                                        <NavLink
                                          to={"/"}
                                          className="col-span-1 font-bold text-green-300 hover:text-green-600"
                                          key={lichChieu.maLichChieu}
                                        >
                                          {moment(
                                            lichChieu.ngayChieuGioChieu
                                          ).format("hh:mm A")}
                                        </NavLink>
                                      );
                                    })}
                                </div>
                              </div>
                            );
                          }),
                        };
                      })}
                    />
                  </div>
                ),
              };
            } else if (id === "2") {
              return {
                label: <span className="labelTabs">Thông tin</span>,
                key: id,
                children: (
                  <div className="mt-5 bg-white p-5">
                    <div className="flex">
                      <div className="flex-1 px-4">
                        <p className="flex">
                          <span className="min-w-[130px] font-bold">
                            Ngày công chiếu:
                          </span>
                          <span className="flex-1">
                            {moment(filmDetail?.ngayKhoiChieu).format(
                              "DD.MM.YYYY"
                            )}
                          </span>
                        </p>
                        <p className="flex">
                          <span className="min-w-[130px] font-bold">
                            Đạo Diễn:
                          </span>
                          <span className="flex-1">
                            {getThongTinPhim.daoDien}
                          </span>
                        </p>
                        <p className="flex ">
                          <span className="min-w-[130px] font-bold">
                            Diễn Viên:
                          </span>
                          <span className="flex-1 w-[70%]">
                            {getThongTinPhim.dienVien}
                          </span>
                        </p>
                        <p className="flex">
                          <span className="min-w-[130px] font-bold">
                            Thể Loại:
                          </span>
                          <span className="flex-1">
                            {getThongTinPhim.theLoai}
                          </span>
                        </p>
                        <p className="flex">
                          <span className="min-w-[130px] font-bold">
                            Định Dạng:
                          </span>
                          <span className="flex-1">
                            {getThongTinPhim.dinhDang}
                          </span>
                        </p>
                        <p className="flex">
                          <span className="min-w-[130px] font-bold">
                            Quốc Gia SX:
                          </span>
                          <span className="flex-1">
                            {getThongTinPhim.quocGiaSX}
                          </span>
                        </p>
                      </div>
                      <div className="flex-1 px-4">
                        <p className="font-bold">Nội dung:</p>
                        <p>{filmDetail?.moTa}</p>
                      </div>
                    </div>
                  </div>
                ),
              };
            } else {
              return {
                label: <span className="labelTabs">Đánh giá</span>,
                key: id,
                children: `Content of Tab Pane ${id}`,
              };
            }
          })}
        />
      </CustomCard>
    </div>
  );
};

export default Detail;