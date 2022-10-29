import { api } from "../constants/api";
import { Banner } from "../types/quanLyPhim";

export const quanLyPhimService = {
  getListBanner: () => {
    return api.get<HttpResponse<Banner[]>>("QuanLyPhim/LayDanhSachBanner");
  },
};
