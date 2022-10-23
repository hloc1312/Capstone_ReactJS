import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducers = combineReducers({});

export const store = configureStore({
  reducer: rootReducers,
  devTools: true,
});

export type RootState = ReturnType<typeof rootReducers>;
