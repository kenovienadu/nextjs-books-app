import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "./slices/basket.slice";

export const store = configureStore({
  reducer: {
    [basketSlice.name]: basketSlice.reducer
  },
  devTools: true,
})