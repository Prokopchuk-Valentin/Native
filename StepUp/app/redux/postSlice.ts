import { createSlice } from "@reduxjs/toolkit";
// import { fetchAdd, fetchDel, fetchPosts } from './thunkActions';
import { SliceStateType } from "../types";

const initialState: SliceStateType = {
  count: 0,
  isLoading: true,
};

const rtcSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
  },
  extraReducers: (builder) => {},
});

export default rtcSlice.reducer;

export const { increment, decrement } = rtcSlice.actions;
