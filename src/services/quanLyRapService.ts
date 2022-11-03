import { api } from "../constants/api";
import { HeThongRap, LichChieuHeThongRap } from "../types/quanLyRapType";
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
};
