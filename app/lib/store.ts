import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import { squareSlice } from "./inSquare";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    counterSlice,
    square: squareSlice.reducer,
  },
});

export const { square } = squareSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
