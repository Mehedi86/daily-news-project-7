import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counter/counterSlice";

export const store = configureStore({
  reducer: {
    counters: counterReducer,
  },
});

// 🔥 Type for entire Redux state
export type RootState = ReturnType<typeof store.getState>;

// 🔥 Type for dispatch
export type AppDispatch = typeof store.dispatch;

export default store;
