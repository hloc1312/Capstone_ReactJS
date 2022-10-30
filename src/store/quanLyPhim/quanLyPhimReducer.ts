import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLyPhimService } from "../../services/quanLyPhimService";
import { Phim } from "../../types/quanLyPhimTypes";

interface InitialState {
  listMovie: Phim[];
  isFetching: boolean;
  err: any;
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
};
export const { reducer: quanLyPhimReducer, actions: quanLyPhimActions } =
  createSlice({
    initialState,
    name: "quanLyPhim",
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getListMovie.pending, (state, action) => {
          state.isFetching = true;
        })
        .addCase(getListMovie.fulfilled, (state, action) => {
          state.isFetching = false;
          state.listMovie = action.payload;
        })
        .addCase(getListMovie.rejected, (state, action) => {
          state.isFetching = false;
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
