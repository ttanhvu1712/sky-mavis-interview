import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "slices";
import * as UserService from "./services";

export type UserInfoState = {
  asyncActionPending: string | null;
  asyncActionError: string | null;
  profile: {
    userName: string;
    walletAddress: string;
    token: string;
  };
  balances: {
    eur: number;
    yen: number;
    usd: number;
  };
};

const initialState: UserInfoState = {
  asyncActionPending: null,
  asyncActionError: null,
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

export const userLogin = createAsyncThunk("userLogin", async () => {
  const response = await UserService.login();
  return response.data;
});

export const userSendAssets = createAsyncThunk(
  "userSendAssets",
  async (params: { value: number; currency: string }) => {
    const response = await UserService.send(params.value, params.currency);
    return response.data;
  }
);

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //login
    builder.addCase(userLogin.pending, (state) => {
      state.asyncActionPending = "userLogin";
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.asyncActionPending = null;
      state.profile = payload?.profile ?? {};
      state.balances = payload?.balances ?? {};
    });
    builder.addCase(userLogin.rejected, (state) => {
      state.asyncActionPending = null;
      state.asyncActionError = "userLogin";
    });
    //send assets
    builder.addCase(userSendAssets.pending, (state) => {
      state.asyncActionPending = "userSendAssets";
    });
    builder.addCase(userSendAssets.fulfilled, (state, { payload }) => {
      state.asyncActionPending = null;
      state.balances = payload?.balances ?? {};
    });
    builder.addCase(userSendAssets.rejected, (state) => {
      state.asyncActionPending = null;
      state.asyncActionError = "userSendAssets";
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
