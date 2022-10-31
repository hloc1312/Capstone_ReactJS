import { combineReducers, configureStore, getDefaultMiddleware, } from "@reduxjs/toolkit";
import { type } from "os";
import { useDispatch } from "react-redux";
import thunk from "redux-thunk";
import { quanLyNguoiDungReducer } from "./reducers/quanLyNguoiDungReducer";

const rootReducer=combineReducers({
    quanLyNguoiDungReducer,
});
export const store=configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(),
    devTools:true,
        
},
)
export type RootState=ReturnType<typeof rootReducer>;
export type AppDispatch=typeof store.dispatch;
export const useAppDispatch=()=>useDispatch<AppDispatch>();
