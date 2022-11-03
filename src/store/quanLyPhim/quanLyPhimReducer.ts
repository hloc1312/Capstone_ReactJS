import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLyPhimService } from "../../services/quanLyPhimService";
import { Phim } from "../../types/quanLyPhimTypes";
import { LichChieuTheoPhim } from "../../types/quanLyRapType";
import { getListLichChieuTheoPhim } from "../quanLyRap";

interface InitialState {
  listMovie: Phim[];
  isFetching: boolean;
  isFetchingDetail: boolean;
  err: any;
  filmDetail: LichChieuTheoPhim;
}

const initialState: InitialState = {
  listMovie: [
    {
      maPhim: 10378,
      tenPhim: "Dog và Cat",
      biDanh: "dog-va-cat",
      trailer: "",
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/dog-va-cat_gp01",
      moTa: "Cat và Dog",
      maNhom: "GP01",
      ngayKhoiChieu: "2022-10-15T00:00:00",
      danhGia: 10,
      hot: false,
      dangChieu: false,
      sapChieu: false,
    },
    {
      maPhim: 6061,
      tenPhim: "Hành Tinh Hỗn Loạn 2",
      biDanh: "hanh-tinh-hon-loan-2",
      trailer: "https://www.youtube.com/embed/CNfNsNkgxjo",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/hanh-tinh-hon-loan-2_gp01.jpg",
      moTa: "Todd Hewwitt (Tom Holland) tình cờ phát hiện ra Viola (Daisy Ridley)- một cô gái sống sót sau khi phi thuyền của cô gặp nạn và rơi xuống hành tinh của cậu. Hành tinh này không hề có bóng dáng phụ nữ, còn đàn ông thì bị ảnh hưởng bởi 'Tiếng Ồn' - một thế lực thể hiện toàn bộ suy nghĩ của họ ra bên ngoài. Vì là cô gái duy nhất trên hành tinh kì lạ này, tính mạng của Viola bị đe dọa. Todd quyết tâm bảo vệ Viola và cả hai bị cuốn vào cuộc phiêu lưu nguy hiểm. Từ đó, Todd dần khám phá ra năng lực đặc biệt của mình, và phát hiện ra những bí mật đen tối của hành tinh mà cậu đang sống.",
      maNhom: "GP01",
      ngayKhoiChieu: "2022-10-18T00:00:00",
      danhGia: 9,
      hot: true,
      dangChieu: true,
      sapChieu: true,
    },

    {
      maPhim: 10380,
      tenPhim: "Mái Ấm Gia Đình",
      biDanh: "mai-am-gia-dinh",
      trailer: "",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/mai-am-gia-dinh_gp01.jpg",
      moTa: "Sitcom rất hay nên coi . Rất nhiều tập",
      maNhom: "GP01",
      ngayKhoiChieu: "2022-10-15T12:35:08.707",
      danhGia: 6,
      hot: true,
      dangChieu: true,
      sapChieu: true,
    },
  ],
  isFetching: false,
  err: "",
  filmDetail: {
    heThongRapChieu: [
      {
        cumRapChieu: [
          {
            lichChieuPhim: [
              {
                maLichChieu: "45709",
                maRap: "458",
                tenRap: "Rạp 8",
                ngayChieuGioChieu: "2022-11-01T07:54:00",
                giaVe: 80000,
                thoiLuong: 120,
              },
            ],
            maCumRap: "bhd-star-cineplex-3-2",
            tenCumRap: "BHD Star Cineplex - 3/2",
            hinhAnh:
              "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
            diaChi: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
          },
        ],
        maHeThongRap: "BHDStar",
        tenHeThongRap: "BHD Star Cineplex",
        logo: "https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
      },
    ],
    maPhim: 10724,
    tenPhim: "Đặc vụ xuyên quốc gia",
    biDanh: "dac-vu-xuyen-quoc-gia",
    trailer: "https://youtu.be/98W8bv_8Kz8",
    hinhAnh:
      "https://movienew.cybersoft.edu.vn/hinhanh/dac-vu-xuyen-quoc-gia_gp13.jpg",
    moTa: "Đặc vụ xuyên quốc gia",
    maNhom: "GP13",
    hot: true,
    dangChieu: true,
    sapChieu: false,
    ngayKhoiChieu: "2022-10-21T00:00:00",
    danhGia: 9,
  },
  isFetchingDetail: false,
};
export const { reducer: quanLyPhimReducer, actions: quanLyPhimActions } =
  createSlice({
    initialState,
    name: "quanLyPhim",
    reducers: {},
    extraReducers: (builder) => {
      builder
        // getListMovie
        .addCase(getListMovie.pending, (state, action) => {
          state.isFetching = true;
        })
        .addCase(getListMovie.fulfilled, (state, action) => {
          state.isFetching = false;
          state.listMovie = action.payload;
        })
        .addCase(getListMovie.rejected, (state, action) => {
          state.isFetching = false;
        })
        // getListLichChieuTheoPhim
        .addCase(getListLichChieuTheoPhim.pending, (state, action) => {
          state.isFetchingDetail = true;
        })
        .addCase(getListLichChieuTheoPhim.fulfilled, (state, action) => {
          state.isFetchingDetail = false;
          state.filmDetail = action.payload;
        })
        .addCase(getListLichChieuTheoPhim.rejected, (state, action) => {
          state.isFetchingDetail = false;
        });
    },
  });

export const getListMovie = createAsyncThunk(
  "quanLyPhim/getListMovie",
  async (data, { dispatch, getState, rejectWithValue }) => {
    try {
      const result = await quanLyPhimService.getListMovie();
      return result.data.content;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);
