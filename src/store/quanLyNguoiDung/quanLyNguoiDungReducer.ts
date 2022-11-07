import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { redirect, useNavigate } from "react-router-dom";
import { quanLyNguoiDungService } from "../../services/quanLyNguoiDungService";
import { User, UserLogin, UserRegister } from "../../types/quanLyNguoiDung";

import { TOKEN, USER_LOGIN } from "../../utils/config";

interface InitialState {
  user?: User;
  thongTinNguoiDung: {};
  isFetching: boolean;
  err: any;
  errRegister: any;
  isFetchingRegister: boolean
}

let userLocalStorage = {};

if (localStorage.getItem(USER_LOGIN)) {
  userLocalStorage = JSON.parse(localStorage.getItem(USER_LOGIN) as string);
}
const initialState: InitialState = {
  thongTinNguoiDung: {},
  err: "",
  isFetching: false,
  user: userLocalStorage,
  errRegister: "",
  isFetchingRegister: true

};
export const {
  reducer: quanLyNguoiDungReducer,
  actions: quanLyNguoiDungActions,
} = createSlice({
  initialState,
  name: "quanLyNguoiDung",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        const thongTinDangNhap = action.payload;
        localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
        localStorage.setItem(
          TOKEN,
          JSON.stringify(action.payload?.accessToken)
        );
        state.isFetching = false;
        state.user = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isFetching = false;
        state.err = action.payload;
      })
      // user register
      .addCase(dangKyAction.pending,(state,action)=>{
        state.isFetchingRegister = true
      }).addCase(dangKyAction.fulfilled,(state,action)=>{
        state.isFetchingRegister = false
      }).addCase(dangKyAction.rejected, (state,action)=>{
        state.isFetchingRegister = false
      })
  },
});

export const userLogin = createAsyncThunk(
  "quanLyNguoiDung/userLogin",
  async (
    thongTinDangNhap: UserLogin,
    { dispatch, getState, rejectWithValue }
  ) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
      if (result.data.statusCode === 200) {
        // const navigation = useNavigate();

        // Lỗi chưa fix được
        // console.log("data", result.data.content);
        return result.data.content;
      }
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }

);

export const dangKyAction = createAsyncThunk(
  "quanLyNguoiDung/dangKy",
  async (thongTinNguoiDung: UserRegister, { rejectWithValue }) => {
    try {
      const result = await quanLyNguoiDungService.dangKy(thongTinNguoiDung);
      if (result.data.statusCode === 200) {
        // alert('Đăng ký thành công!')
        return result.data.content;
      }
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);
