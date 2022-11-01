import { api } from "../constants/api";
import { User } from "../types/quanLyNguoiDung";

export const quanLyNguoiDungService = {
  getListUser: () => {
    return api.get<HttpResponse<User[]>>(
      "QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP13"
    );
  },
};
