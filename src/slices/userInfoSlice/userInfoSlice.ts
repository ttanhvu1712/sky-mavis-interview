import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "src/slices";
import type { BalancesInfo, UserProfile } from "src/types";
import * as UserService from "./userInfoService";

export type UserInfoState = {
  asyncActionPending: string | null;
  asyncActionError: string | null;
  loginStatus: "login" | "logout";
  exchangeStatus: "none" | "success" | "fail";
  profile: UserProfile;
  balances: BalancesInfo;
};

const initialState: UserInfoState = {
  asyncActionPending: null,
  asyncActionError: null,
  loginStatus: "logout",
  exchangeStatus: "none",
  profile: {
    userName: "",
    walletAddress: "",
    token: "",
  },
  balances: {
    eur: 0,
    yen: 0,
    usd: 0,
  },
};

export const userLogin = createAsyncThunk(
  "userLogin",
  async (params: { passwords: string }) => {
    const response = await UserService.login(params.passwords);
    return response.data;
  }
);

export const userSendAssets = createAsyncThunk(
  "userSendAssets",
  async (params: { to: string; asset: string; amount: number }) => {
    const response = await UserService.send(
      params.to,
      params.asset,
      params.amount
    );
    return response.data;
  }
);

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    resetExchangeStatus: (state) => {
      state.exchangeStatus = initialState.exchangeStatus;
    },
    userLogout: (state) => {
      state.loginStatus = initialState.loginStatus;
      state.profile = initialState.profile;
      state.balances = initialState.balances;
    },
  },
  extraReducers: (builder) => {
    //login
    builder.addCase(userLogin.pending, (state) => {
      state.asyncActionPending = "userLogin";
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.asyncActionPending = null;
      state.loginStatus = "login";
      state.profile = payload?.profile ?? {};
      state.balances = payload?.balances ?? {};
    });
    builder.addCase(userLogin.rejected, (state) => {
      state.asyncActionPending = null;
      state.loginStatus = "logout";
      state.asyncActionError = "userLogin";
    });
    //send assets
    builder.addCase(userSendAssets.pending, (state) => {
      state.asyncActionPending = "userSendAssets";
    });
    builder.addCase(userSendAssets.fulfilled, (state, { payload }) => {
      state.asyncActionPending = null;
      state.balances = payload?.balances ?? {};
      state.exchangeStatus = payload?.status;
    });
    builder.addCase(userSendAssets.rejected, (state) => {
      state.asyncActionPending = null;
      state.asyncActionError = "userSendAssets";
      state.exchangeStatus = "fail";
    });
  },
});

export const actions = {
  ...userInfoSlice.actions,
  userLogin,
  userSendAssets,
};

export const selector = (state: RootState) => state.userInfo;
export default userInfoSlice.reducer;
