import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counter";
import { squareSlice } from "./inSquare";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    square: squareSlice.reducer,
  },
});

export const { square } = squareSlice.actions;
export const { plus, minus } = counterSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
