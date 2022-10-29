import { createSlice } from "@reduxjs/toolkit";
import { Phim } from "../../types/quanLyPhimTypes";

interface InitialState {
  listMovie: Phim[];
  isFetching: boolean;
  err: any;
}

const initialState: InitialState = {
  listMovie: [
    {
      maPhim: 10378,
      tenPhim: "Dog và Cat",
      biDanh: "dog-va-cat",
      trailer: "",
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/dog-va-cat_gp01.jpg",
      moTa: "Cat và Dog",
      maNhom: "GP01",
      ngayKhoiChieu: "2022-10-15T00:00:00",
      danhGia: 10,
      hot: false,
      dangChieu: false,
      sapChieu: false,
    },
  ],
  isFetching: false,
  err: "",
};
export const { reducer: quanLyPhimReducer, actions: quanLyPhimActions } =
  createSlice({
    initialState,
    name: "quanLyPhim",
    reducers: {},
    extraReducers: (builder) => {},
  });
