import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slices/homeSlice";
import detailSlice from "./slices/detailSlice";
// ...

export const store = configureStore({
  reducer: {
    home: homeSlice,
    film: detailSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
