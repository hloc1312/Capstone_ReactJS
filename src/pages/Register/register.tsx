import { ArrowRightOutlined } from '@ant-design/icons'
import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
// import { history } from '../../App'
import { dangKyAction, quanLyNguoiDungActions, quanLyNguoiDungReducer } from '../../store/quanLyNguoiDung/quanLyNguoiDungReducer'
import { quanLyNguoiDungService } from '../../services/quanLyNguoiDungService'
import { GROUPID } from '../../utils/config'
import { useNavigate } from 'react-router-dom'
import { useAppDispath } from '../../store/configStore'

const Register = () => {

  const dispatch = useAppDispath()
    const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      email: '',
      soDt: '',
      maNhom: GROUPID,
      hoTen: '',
    },
    onSubmit: values => {
      console.log("values: ", values);
    //   const action = quanLyNguoiDungReducer.dangKyAction(values)
      dispatch(dangKyAction(values)).unwrap().then(()=>navigate('/user/login'))
    },
  })


  return (
    <div className='lg:w-1/2 lg:px-20'>
      <form onSubmit={
        formik.handleSubmit
      } className="w-full py-10 px-5 md:px-10 h-screen">
        <div className="text-center mb-10">
          <h1 className="font-bold text-3xl text-gray-900">Đăng ký</h1>
          <p>Nhập thông tin để đăng ký</p>
        </div>
        <div>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label htmlFor='' className="text-xs font-semibold px-1">Tài khoản</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg" /></div>
                <input type="text" name='taiKhoan' onChange={formik.handleChange} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Nhập tài khoảng" />
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label htmlFor='' className="text-xs font-semibold px-1">Mật khẩu</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg" /></div>
                <input type="password" name='matKhau' onChange={formik.handleChange} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Nhập mật khẩu" />
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label htmlFor='' className="text-xs font-semibold px-1">Nhập lại mật khẩu</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg" /></div>
                <input type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Nhập lại mật khẩu trên" />
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label htmlFor='' className="text-xs font-semibold px-1">Họ tên</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg" /></div>
                <input type="text" name='hoTen' onChange={formik.handleChange} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="nguyenvana@gmail.com" />
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label htmlFor='' className="text-xs font-semibold px-1">Email</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg" /></div>
                <input type="email" name='email' onChange={formik.handleChange} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="nguyenvana@gmail.com" />
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-12">
              <label htmlFor='' className="text-xs font-semibold px-1">Số điện thoại</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg" /></div>
                <input type="tel" name='soDt' onChange={formik.handleChange} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-1/2 px-3 mb-5">
              <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">Xác nhận</button>
            </div>
            <div className="w-1/2 px-3 mb-5">
              <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold" 
            //   onClick={() => {
            //     navigate('/user/login')
            //   }}
              >Đăng nhập</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Register