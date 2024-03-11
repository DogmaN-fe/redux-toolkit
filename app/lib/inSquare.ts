import { PayloadAction, Slice, createSlice } from "@reduxjs/toolkit";

interface initialState {
  count: number;
}

export const squareSlice: Slice = createSlice({
  name: "square",
  initialState: {
    count: 2,
  } as initialState,
  reducers: {
    square: (state, action: PayloadAction<number>) => {
      state.count = state.count ** action.payload;
    },
  },
});
