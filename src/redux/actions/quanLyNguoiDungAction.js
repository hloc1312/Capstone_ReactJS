import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungServies";
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "./types/quanLyNguoiDungType";
import {history} from '../../App'
import { GROUPID } from "../../util/settings/config";

export const quanLyNguoiDungAction = {
    dangNhapAction: (thongTinDangNhap) => {
        return async (dispatch) => {
            try {
                const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap)
                if (result.data.statusCode === 200) {
                    dispatch({
                        type: DANG_NHAP_ACTION,
                        thongTinDangNhap: result.data.content
                    });
                    //Chuyển hướng đăng nhập về trang trước đó
                    history.goBack();
                }
            } catch (errors) {
                console.log('errors: ', errors);
            }
        }
    },
    layThongTinNguoiDungAction: () => {
        return async (dispatch) => {
            try {
                const result = await quanLyNguoiDungService.layThongTinNguoiDung()
                if (result.data.statusCode === 200) {
                    // console.log('result: ', result.data.content);
                    dispatch({
                        type: SET_THONG_TIN_NGUOI_DUNG,
                        thongTinNguoiDung: result.data.content
                    });

                }
            } catch (errors) {
                console.log('errors: ', errors);
            }
        }
    },
    dangKyAction: (thongTinNguoiDung) => {
        return async (dispatch) => {
            try {
                const result = await quanLyNguoiDungService.dangKy(thongTinNguoiDung)
                if (result.data.statusCode === 200) {
                    // console.log('result: ', result.data.content);
                    alert('Đăng ký thành công!')
                }
            } catch (errors) {
                console.log('errors: ', errors.reponse?.data);
            }
        }
    },
    layDanhSachNguoiDungAction: (maNhom, tuKhoa = '') => {
        return async (dispatch) => {
            try {
                const result = await quanLyNguoiDungService.layDanhSachNguoiDung(maNhom, tuKhoa)
                if (result.data.statusCode === 200) {
                    // console.log('result: ', result.data.content);
                    dispatch({
                        type: SET_DANH_SACH_NGUOI_DUNG,
                        payload: result.data.content
                    })
                }
            } catch (errors) {
                console.log('errors: ', errors.reponse?.data);
            }
        }
    },

    themNguoiDungAction: (thongTinNguoiDung) => {
        return async (dispatch) => {
            try {
                const result = await quanLyNguoiDungService.themNguoiDung(thongTinNguoiDung)
                if (result.data.statusCode === 200) {
                    // console.log('result: ', result.data.content);
                    alert('Thêm người dùng thành công!')
                    history.goBack()
                }
            } catch (errors) {
                console.log('errors: ', errors.reponse?.data);
            }
        }
    },
    xoaNguoiDungAction: (taiKhoan) => {
        return async (dispatch) => {

            try {
                const result = await quanLyNguoiDungService.xoaNguoiDung(taiKhoan)
                // console.log('result: ', result.data.content);
                alert('Xóa người dùng thành công!')
                // Sau khi xóa, load lại danh sách phim mới
                dispatch(quanLyNguoiDungAction.layDanhSachNguoiDungAction(GROUPID))
            } catch (errors) {
                alert('Bạn không thể xóa người dùng này(do lỗi 500 hay gì đó)')
                console.log("errors: ", errors.reponse?.data);
            }
        }
    },

    layThongTinNguoiDungEditAction: (taiKhoan) => {
        return async (dispatch) => {
            try {
                const result = await quanLyNguoiDungService.layThongTinNguoiDungEdit(taiKhoan)
                if (result.data.statusCode === 200) {
                    // console.log('result: ', result.data.content);
                    dispatch({
                        type: SET_THONG_TIN_NGUOI_DUNG_EDIT,
                        thongTinNguoiDungEdit: result.data.content
                    });

                }
            } catch (errors) {
                console.log('errors: ', errors);
            }
        }
    },

    layThongTinUserEditAction: (taiKhoan) => {
        return async (dispatch) => {
            try {
                const result = await quanLyNguoiDungService.layThongTinNguoiDungEdit(taiKhoan)
                if (result.data.statusCode === 200) {
                    // console.log('result: ', result.data.content);
                    dispatch({
                        type: SET_THONG_TIN_USER_EDIT,
                        thongTinUserEdit: result.data.content
                    });

                }
            } catch (errors) {
                console.log('errors: ', errors);
            }
        }
    },

    capNhatThongTinNguoiDungAction: (thongTinNguoiDung) => {
        return async (dispatch) => {

            try {
                let result = await quanLyNguoiDungService.capNhatThongTinNguoiDung(thongTinNguoiDung)
                alert('Cập nhật thông tin người dùng thành công!')
                // console.log('result: ', result.data.content);
                dispatch(quanLyNguoiDungAction.layDanhSachNguoiDungAction(GROUPID, ''))
                history.push('/admin/users')
            } catch (errors) {
                alert('Cập nhật thất bại do lỗi gì đó từ server!')
                console.log("errors: ", errors.reponse?.data);
            }
        }
    },

    capNhatThongTinUserAction: (thongTinNguoiDung) => {
        return async (dispatch) => {

            try {
                let result = await quanLyNguoiDungService.capNhatThongTinUser(thongTinNguoiDung)
                // console.log('result: ', result.data.content);
                alert('Cập nhật thông tin tài khoản này thành công!')
                dispatch(quanLyNguoiDungAction.layThongTinUserEditAction(thongTinNguoiDung.taiKhoan))
            } catch (errors) {
                alert('Cập nhật thất bại do lỗi gì đó từ server!')
                console.log("errors: ", errors.reponse?.data);
            }
        }
    }
}