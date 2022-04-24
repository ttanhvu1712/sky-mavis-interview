import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import asyncThunkReducer from "./asyncThunk";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    asyncThunk: asyncThunkReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
