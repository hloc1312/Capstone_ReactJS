import { api } from "../constants/api";
import { User, UserLogin, UserRegister } from "../types/quanLyNguoiDung";
import { GROUPID } from "../utils/config";

export const quanLyNguoiDungService = {
  getListUser: () => {
    return api.get<HttpResponse<User[]>>(
      `QuanLyNguoiDung/LayDanhSachNguoiDung?maNhom=${GROUPID}`
    );
  },

  dangNhap: (thongTinDangNhap: UserLogin) => {
    return api.post<HttpResponse<User>>(
      "QuanLyNguoiDung/DangNhap",
      thongTinDangNhap
    );
  },
  dangKy: (thongTinNguoiDun: UserRegister) => {
    return api.post<HttpResponse<UserRegister>>(`QuanLyNguoiDung/DangKy`, thongTinNguoiDun);
},

// layDanhSachNguoiDung: (maNhom, tuKhoa) => {
//     if(tuKhoa.trim() !== '') {
//         return api.get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}&tuKhoa=${tuKhoa}`)
//     }
//     return api.get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`)
// },

// themNguoiDung: (thongTinNguoiDung) => {
//     return api.post(`QuanLyNguoiDung/ThemNguoiDung`, thongTinNguoiDung)
// },

// xoaNguoiDung: (taiKhoan) => {
//     return api.delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
// },

// layThongTinNguoiDungEdit: (taiKhoan) => {
//     return api.post(`QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`)
// },

// capNhatThongTinNguoiDung: (thongTinNguoiDung) => {
//     return api.post(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`, thongTinNguoiDung)
// },
// capNhatThongTinUser: (thongTinNguoiDung) => {
//     return api.put(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`, thongTinNguoiDung)
// }


  
};
