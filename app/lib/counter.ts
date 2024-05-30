import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface initialState {
  count: number;
}

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  } as initialState,
  reducers: {
    plus: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    minus: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
  },
});


export const {plus, minus} = counterSlice.actions
export default counterSlice.reducer