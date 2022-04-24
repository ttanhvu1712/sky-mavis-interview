import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "slices/hooks";
import { actions, selector } from "slices/asyncThunk";
import type { NextPage } from "next";

const { incrementByAmount, increment, decrement, getAsyncThunk } = actions;

const Testing: NextPage = () => {
  const dispatch = useAppDispatch();
  const { counter, data, asyncActionPending } = useAppSelector(selector);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);
  const isGetAsyncThunkLoading = asyncActionPending === "getAsyncThunk";

  useEffect(() => {
    dispatch(getAsyncThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Welcome to the greatest app in the world!</h1>
      <h2>The current number is {counter}</h2>
      <div>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          type="number"
        />
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Increment by amount
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
      </div>
      <div>{isGetAsyncThunkLoading ? "Loading...." : data.quote}</div>
    </>
  );
};

export default Testing;
