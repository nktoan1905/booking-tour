import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import newsReducer from "./slice/newSlice";
export default configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
  },
});
