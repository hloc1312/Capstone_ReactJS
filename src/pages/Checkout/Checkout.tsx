import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispath } from "../../store/configStore";
import screen from "../../assets/images/screen.png";
import {
  datGhe,
  datGheAction,
  datVe,
  getListPhongVe,
  quanLyDatVeAction,
} from "../../store/quanLyDatVe";
import { useParams } from "react-router-dom";
import moment from "moment";
import "./checkout.css";
import cn from "classnames";
import _ from "lodash";
import { DatVe } from "../../types/quanLyDatVeTypes";
import { TOKEN } from "../../utils/config";
import { Tabs } from "antd";
import { lichSuNguoiDungDatVe } from "../../store/quanLyNguoiDung";
import Loading from "../../components/Molecules/Loading/Loading";
import { connection } from "../..";

const Checkout = () => {
  const { user } = useSelector((state: RootState) => {
    return state.quanLyNguoiDungReducer;
  });

  const {
    chiTietPhongVe,
    danhSachGheDangDat,
    isFetchingDatVe,
    danhSachGheKhachDangDat,
  } = useSelector((state: RootState) => {
    return state.quanLyDatVeReducer;
  });
  console.log({ danhSachGheKhachDangDat });
  const thongTinPhim = chiTietPhongVe?.thongTinPhim;
  const danhSachGhe = chiTietPhongVe?.danhSachGhe;

  const dispatch = useAppDispath();

  // lấy thông tin param từ url
  const params = useParams();

  const renderGhe = () => {
    return danhSachGhe?.map((ghe, index) => {
      // Kiểm tra xem tửng ghế có trong mảng danhSachGheDangDat hay không
      const indexGhe = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );

      // Kiểm tra xem tửng ghế có trong mảng danhSachGheKhachDangDat hay không
      const indexGheKhachDat = danhSachGheKhachDangDat?.findIndex(
        (gheKD) => ghe.maGhe === gheKD.maGhe
      );
      let classGheKD = "";
      if (indexGheKhachDat !== -1) {
        classGheKD = "gheKhachDangDat";
      }

      let classGheDD = "";
      if (indexGhe !== -1) {
        classGheDD = "gheDangDat";
      }
      let classGheMinhDat = "";
      if (user?.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheMinhDat = "gheDoMinhDat";
      }
      return (
        <Fragment key={ghe.maGhe}>
          <button
            disabled={ghe.daDat || classGheKD !== ""}
            onClick={() => {
              // dispatch(quanLyDatVeAction.datVe(ghe));
              dispatch(datGhe({ ghe: ghe, maLichChieu: Number(params.id) }));
            }}
            className={cn(
              "ghe font-bold",
              { gheVip: ghe.loaiGhe === "Vip" },
              { gheDaDat: ghe.daDat === true },
              { gheDangDat: classGheDD !== "" },
              { gheDoMinhDat: classGheMinhDat !== "" },
              {
                gheKhachDangDat: classGheKD !== "",
              }
            )}
          >
            {ghe.daDat ? (
              classGheMinhDat !== "" ? (
                <i className="far fa-user"></i>
              ) : (
                <i className="fas fa-times"></i>
              )
            ) : classGheKD !== "" ? (
              <i className="fas fa-user-check"></i>
            ) : (
              ghe.stt
            )}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  useEffect(() => {
    dispatch(getListPhongVe(Number(params.id)));

    // Load danh sách ghế đang đặt từ server về
    connection.on("loadDanhSachGheDaDat", (dsGheKhachDat) => {
      console.log("dsGheKhachDat", dsGheKhachDat);
    });
  }, []);
  if (isFetchingDatVe) {
    return <Loading />;
  }
  return (
    <div className="px-4 min-h-screen mt-5">
      <div className="grid grid-cols-12 min-h-screen">
        <div className="col-span-9">
          <div className="flex items-center flex-col">
            <img src={screen} alt="" className="w-[80%] " />
            <div>{renderGhe()}</div>
          </div>

          <div className="mt-5 flex justify-center">
            <table className="divide-y divide-gray-200 w-2/3">
              <thead className="bg-gray-50 p-5">
                <tr>
                  <th>Ghế chưa đặt</th>
                  <th>Ghế đang đặt</th>
                  <th>Ghế vip</th>
                  <th>Ghế mình đặt </th>
                  <th>Ghế đã được đặt</th>
                  <th>Ghế khách đang đặt</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="text-center">
                    <button className="ghe font-bold text-center">00</button>
                  </td>
                  <td className="text-center">
                    <button className="ghe font-bold gheDangDat text-center">
                      00
                    </button>
                  </td>
                  <td className="text-center">
                    <button className="ghe font-bold gheVip text-center">
                      00
                    </button>
                  </td>
                  <td className="text-center">
                    <button className="ghe font-bold gheDoMinhDat text-center">
                      <i className="far fa-user"></i>
                    </button>
                  </td>
                  <td className="text-center">
                    <button className="ghe font-bold gheDaDat text-center">
                      <i className="fas fa-times"></i>
                    </button>
                  </td>
                  <td className="text-center">
                    <button className="ghe font-bold gheKhachDangDat text-center">
                      <i className="fas fa-user-check"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-3">
          <div className="flex flex-col h-screen">
            <div>
              <h3 className="text-green-400 text-center text-2xl">
                {danhSachGheDangDat
                  .reduce((tongTien, ghe) => {
                    return (tongTien += ghe.giaVe);
                  }, 0)
                  .toLocaleString()}
                Đ
              </h3>
              <hr />
              <h3 className="text-xl mt-2 font-bold">
                {thongTinPhim?.tenPhim}
              </h3>
              <p>Địa điểm: {thongTinPhim?.diaChi}</p>
              <p>
                Ngày chiếu:{" "}
                {moment(thongTinPhim?.ngayChieu).format("DD/MM/YYYY")} -{" "}
                {thongTinPhim?.gioChieu} -{" "}
                <span className="uppercase">{thongTinPhim?.tenRap}</span>
              </p>
              <hr />
              <div className="flex my-5 justify-between">
                <div className="w-4/5">
                  <span className="text-red-400 text-lg">Ghế: </span>
                  {_.sortBy(danhSachGheDangDat, ["stt"]).map((item) => {
                    return (
                      <span
                        className="text-green-500 text-xl font-bold"
                        key={item.maGhe}
                      >
                        {" "}
                        {item.stt}
                      </span>
                    );
                  })}
                </div>
                <div className="text-right">
                  <span className="text-green-600 text-lg">
                    {danhSachGheDangDat
                      .reduce((tongTien, ghe) => {
                        return (tongTien += ghe.giaVe);
                      }, 0)
                      .toLocaleString()}
                    Đ
                  </span>
                </div>
              </div>
              <hr />
              <div className="my-5">
                <i>Email: </i> <br />
                {user?.email}
              </div>
              <hr />
              <div className="my-5">
                <i>Phone: </i> <br />
                {user?.soDT}
              </div>
              <hr />
            </div>
            <div className="mb-0 uppercase text-center">
              <div
                onClick={async () => {
                  const thongTinDatVe: DatVe = {
                    maLichChieu: Number(params.id),
                    danhSachVe: danhSachGheDangDat,
                  };

                  await dispatch(datVe(thongTinDatVe));
                  // Đặt vé thành công gọi lại api load lại phòng vé
                  await dispatch(getListPhongVe(Number(params.id)));
                  await dispatch(quanLyDatVeAction.datVeThanhCong());
                  await dispatch(quanLyDatVeAction.chuyenTab());
                }}
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-[16px] px-5 py-2.5 text-center uppercase cursor-pointer"
              >
                đặt vé
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Checkout;
const Demo: React.FC = () => {
  const { tabActive } = useSelector((state: RootState) => {
    return state.quanLyDatVeReducer;
  });
  const dispatch = useAppDispath();
  return (
    <div className="p-4">
      <Tabs
        activeKey={tabActive.toString()}
        destroyInactiveTabPane
        tabPosition={"top"}
        onChange={(key) => {
          dispatch(quanLyDatVeAction.changeTabActive(key));
        }}
        items={new Array(2).fill(null).map((_, i) => {
          const id = String(i + 1);
          if (id === "1") {
            return {
              label: `01 CHỌN GHẾ & THANH TOÁN`,
              key: id,
              children: <Checkout />,
            };
          } else {
            return {
              label: `02 KẾT QUẢ ĐẶT VÉ`,
              key: id,
              children: <KetQuaDatVe />,
            };
          }
        })}
      />
    </div>
  );
};

export default Demo;

const KetQuaDatVe = () => {
  const { thongTinNguoiDung } = useSelector((state: RootState) => {
    return state.quanLyNguoiDungReducer;
  });
  const dispatch = useAppDispath();
  useEffect(() => {
    dispatch(lichSuNguoiDungDatVe());
  }, []);

  const renderTicket = () => {
    return thongTinNguoiDung?.thongTinDatVe.map((item) => {
      const tickets = _.first(item.danhSachGhe);
      return (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={item.maVe}>
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src={item.hinhAnh}
            />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">
                {item.tenPhim}
              </h2>
              <p className="text-gray-500">
                <span className="font-bold">Giờ chiếu:</span>{" "}
                {moment(item.ngayDat).format("hh:mm A")} -{" "}
                <span className="font-bold">Ngày chiếu:</span>{" "}
                {moment(item.ngayDat).format("DD/MM/YYYY")}
              </p>
              <p className="text-gray-500">
                <span className="font-bold"> Địa điểm: </span>
                {tickets?.tenHeThongRap}
              </p>
              <p className="text-gray-500 uppercase">
                <span className="font-bold">Tên rạp: </span>
                {tickets?.tenCumRap} - <span className="font-bold">Ghế:</span>{" "}
                {item.danhSachGhe.map((ghe, index) => {
                  return (
                    <span
                      key={index}
                      className="text-green-500 text-[16px] font-bold"
                    >
                      [{ghe.tenGhe}]{" "}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-900 uppercase font-bold">
              Lịch sử đặt vé khách hàng
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Hãy xem thông tin địa điểm và thời gian để xem phim vui bạn nhé!
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {renderTicket()}
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Holden Caulfield
                  </h2>
                  <p className="text-gray-500">UI Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
