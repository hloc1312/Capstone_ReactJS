import { api } from "../constants/api";
import { DanhSachGheVaPhim, DatVe } from "../types/quanLyDatVeTypes";
import { TOKEN } from "../utils/config";

export const quanLyDatVeService = {
  getListPhongVe: (maLichChieu: number) => {
    return api.get<HttpResponse<DanhSachGheVaPhim>>(
      `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  },

  datVe: (thongTinDatVe: DatVe) => {
    return api.post<HttpResponse<DatVe>>("QuanLyDatVe/DatVe", thongTinDatVe);
  },
};
