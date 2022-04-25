import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./userInfoSlice";
import marketInfoReducer from "./marketInfoSlice";
// import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    marketInfo: marketInfoReducer,
  },
  devTools: true,
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(logger);
  // },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
