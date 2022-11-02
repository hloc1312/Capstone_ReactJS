import { api } from "../constants/api";
import { LichChieuHeThongRap } from "../types/quanLyRapType";
import { GROUPID } from "../utils/config";

export const quanLyRapService = {
  getListLichChieuHeThongRap: () => {
    return api.get<HttpResponse<LichChieuHeThongRap[]>>(
      `QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`
    );
  },
};
