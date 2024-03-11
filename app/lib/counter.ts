import { PayloadAction, Slice, createSlice } from "@reduxjs/toolkit";

interface initialState {
  count: number;
}

export const counterSlice: Slice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  } as initialState,
  reducers: {
    plus: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    minus: (state, action: PayloadAction<number>) => {
      state.count -= 1;
    },
  },
});
