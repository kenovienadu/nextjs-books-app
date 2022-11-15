import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { basketSlice } from "./slices/basket.slice";
import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
  reducer: {
    [basketSlice.name]: basketSlice.reducer
  },
  devTools: true,
})

// export type AppStore = ReturnType<typeof makeStore>;
// export type AppState = ReturnType<AppStore["getState"]>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   AppState,
//   unknown,
//   Action
// >;

// export const wrapper = createWrapper<AppStore>(makeStore);