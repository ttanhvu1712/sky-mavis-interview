import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as MarketService from "./services";
import type { RootState } from "slices";

export type MarketInfoState = {
  asyncActionPending: string | null;
  asyncActionError: string | null;
  exchangeRates: {
    usd: number;
    yen: number;
    eur: number;
  };
};

const initialState: MarketInfoState = {
  asyncActionPending: null,
  asyncActionError: null,
  exchangeRates: {
    usd: 0,
    yen: 0,
    eur: 0,
  },
};

export const getExchangeRates = createAsyncThunk(
  "getExchangeRates",
  async (params: { target: string }) => {
    const response = await MarketService.getExchangeRates(params.target);
    return response.data;
  }
);

export const marketInfoSlice = createSlice({
  name: "marketInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getExchangeRates.pending, (state) => {
      state.asyncActionPending = "getExchangeRates";
    });
    builder.addCase(getExchangeRates.fulfilled, (state, { payload }) => {
      state.asyncActionPending = null;
      state.exchangeRates = payload?.exchangeRates ?? {};
    });
    builder.addCase(getExchangeRates.rejected, (state) => {
      state.asyncActionPending = null;
      state.asyncActionError = "getExchangeRates";
    });
  },
});

export const actions = {
  ...marketInfoSlice.actions,
  getExchangeRates,
};

export const selector = (state: RootState) => state.marketInfo;
export default marketInfoSlice.reducer;
