import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/configStore";
import screen from "../../assets/images/screen.png";
const Checkout = () => {
  const { user } = useSelector((state: RootState) => {
    return state.quanLyNguoiDungReducer;
  });

  return (
    <div className="px-4 min-h-screen mt-5">
      <div className="grid grid-cols-12 min-h-screen">
        <div className="col-span-9">
          <div className="flex justify-center mt-5">
            <img src={screen} alt="" className="w-[80%] " />
          </div>
        </div>
        <div className="col-span-3">
          <div className="flex flex-col justify-between h-screen">
            <div>
              <h3 className="text-green-400 text-center text-2xl">0 đ</h3>
              <hr />
              <h3 className="text-xl mt-2">Lật mặt 48h</h3>
              <p>Địa điểm: BHD Star - Vincom 3/2</p>
              <p>Ngày chiếu: 25/04/2020 - 12:05 - RẠP 5</p>
              <hr />
              <div className="grid grid-cols-2 my-5">
                <div>
                  <span className="text-red-400 text-lg">Ghế</span>
                </div>
                <div className="text-right">
                  <span className="text-green-600 text-lg">0đ</span>
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
              <div className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-[16px] px-5 py-2.5 text-center uppercase cursor-pointer">
                đặt vé
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
