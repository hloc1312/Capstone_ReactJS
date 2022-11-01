import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { quanLyNguoiDungService } from "../../services/quanLyNguoiDungService";

import { User } from "../../types/quanLyNguoiDung";
import { TOKEN } from "../../utils/config";

interface InitialState {
  userLogin: {} | undefined;
  thongTinNguoiDung: {};
  isFetching: boolean;
  err: any;
}

let user = {};
const USER_LOGIN: User = {
  email: "somemail@mail.com",
  hoTen: "testing thử",
  maLoaiNguoiDung: "KhachHang",
  soDT: "0900900900",
  taiKhoan: "aa01",
  matKhau: "12345678",
};
if (localStorage.getItem(JSON.stringify(USER_LOGIN)) as string) {
  user = JSON.parse(localStorage.getItem(JSON.stringify(USER_LOGIN)) as string);
}
const initialState: InitialState = {
  userLogin: user,
  thongTinNguoiDung: {},
  err: "",
  isFetching: false,
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
      .addCase(getListUser.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(getListUser.fulfilled, (state, action) => {
        localStorage.setItem(
          JSON.stringify(USER_LOGIN),
          JSON.stringify(action.payload)
        );
        localStorage.setItem(TOKEN, JSON.stringify(action.payload));
        state.userLogin = action.payload;
      });
  },
});
export const getListUser = createAsyncThunk(
  "quanLyNguoiDung/getListUser",
  async (data, { dispatch, getState, rejectWithValue }) => {
    try {
      const result = await quanLyNguoiDungService.getListUser();
      if (result.data.statusCode === 200) {
        const navigate = useNavigate();
        navigate("/home");
        return result.data.content;
      }
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);
