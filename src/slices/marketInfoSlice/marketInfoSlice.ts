import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as MarketService from "./marketInfoServices";
import type { RootState } from "src/slices";
import type { ExchangeRate } from "src/types";

type MarketInfoState = {
  asyncActionPending: string | null;
  asyncActionError: string | null;
  exchangeRates: ExchangeRate;
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

const getExchangeRates = createAsyncThunk(
  "getExchangeRates",
  async (params: { target: string }) => {
    const response = await MarketService.getExchangeRates(params.target);
    return response.data;
  }
);

const marketInfoSlice = createSlice({
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
