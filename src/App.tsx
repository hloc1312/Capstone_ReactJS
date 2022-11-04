import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers/Routers';
import Login from "./pages/Login/login";
// import Register from "./pages/Register/register";
import { RootState } from './store/configStore';
import { useDispatch,useSelector } from 'react-redux';


function App() {
  const { userLogin } = useSelector((state:RootState) => state.quanLyNguoiDungReducer
  );
  console.log("userLogin: ", userLogin);
  
}
export default App;
