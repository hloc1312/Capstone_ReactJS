import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const rootReducers = combineReducers({});

export const store = configureStore({
  reducer: rootReducers,
  middleware: [thunk],
  devTools: true,
});

export type RootState = ReturnType<typeof rootReducers>;
