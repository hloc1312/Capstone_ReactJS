import { api } from "../constants/api";
import { Banner, Phim } from "../types/quanLyPhimTypes";

export const quanLyPhimService = {
  getListBanner: () => {
    return api.get<HttpResponse<Banner[]>>("QuanLyPhim/LayDanhSachBanner");
  },

  getListMovie: () => {
    return api.get<HttpResponse<Phim[]>>(
      "/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
    );
  },
};
