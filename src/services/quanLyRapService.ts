import { api } from "../constants/api";
import {
  HeThongRap,
  LichChieuHeThongRap,
  LichChieuTheoPhim,
} from "../types/quanLyRapType";
import { GROUPID } from "../utils/config";

export const quanLyRapService = {
  getListLichChieuHeThongRap: () => {
    return api.get<HttpResponse<LichChieuHeThongRap[]>>(
      `QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`
    );
  },
  getListHeThongRap: () => {
    return api.get<HttpResponse<HeThongRap[]>>(
      "QuanLyRap/LayThongTinHeThongRap"
    );
  },

  getListLichChieuTheoMaPhim: (maPhim: string) => {
    return api.get<HttpResponse<LichChieuTheoPhim>>(
      `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
    );
  },
};
