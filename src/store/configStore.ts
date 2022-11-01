import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
// import thunk from "redux-thunk";
import { carouselReducer, quanLyPhimReducer } from "./quanLyPhim";
import { quanLyNguoiDungReducer } from "./quanLyNguoiDung";
const rootReducers = combineReducers({
  carouselReducer,
  quanLyPhimReducer,
  quanLyNguoiDungReducer,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

export type RootState = ReturnType<typeof rootReducers>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispath = () => useDispatch<AppDispatch>();
