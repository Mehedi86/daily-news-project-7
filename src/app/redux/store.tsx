import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counter/counterSlice";
import postsReducer from "../posts/postsSlice";
import commentsReducer from "../comments/commentsSlice";

import informationReducer from "../information/informationSlice"

export const store = configureStore({
  reducer: {
    counters: counterReducer,
    posts: postsReducer,
    comments: commentsReducer,
    information: informationReducer
  },
});

// 🔥 Type for entire Redux state
export type RootState = ReturnType<typeof store.getState>;

// 🔥 Type for dispatch
export type AppDispatch = typeof store.dispatch;

export default store;
