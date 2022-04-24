import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAsyncThunkService } from "./services";
import type { RootState } from "slices";
import axios from "axios";

// here we are typing the types for the state
export type AsyncThunkState = {
  asyncActionPending: string | null;
  asyncActionError: string | null;
  counter: number;
  data: { quote: string };
};

const initialState: AsyncThunkState = {
  asyncActionPending: null,
  asyncActionError: null,
  counter: 0,
  data: { quote: "click that button" },
};

// This action is what we will call using the dispatch in order to trigger the API call.
export const getAsyncThunk = createAsyncThunk("getAsyncThunk", async () => {
  const response = await getAsyncThunkService();
  return response.data;
});

export const asyncThunkSlice = createSlice({
  name: "asyncThunk",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAsyncThunk.pending, (state) => {
      state.asyncActionPending = "getAsyncThunk";
    });
    builder.addCase(getAsyncThunk.fulfilled, (state, { payload }) => {
      state.asyncActionPending = null;
      state.data = payload;
    });
    builder.addCase(getAsyncThunk.rejected, (state) => {
      state.asyncActionPending = null;
      state.asyncActionError = "getAsyncThunk";
    });
  },
});

export const actions = {
  ...asyncThunkSlice.actions,
  getAsyncThunk,
};
export const selector = (state: RootState) => state.asyncThunk;
export default asyncThunkSlice.reducer;
