import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import userReducer from "./slice/userSlice";
import contactSlice from "./slice/contactSlice";
import newSlice from "./slice/newSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    contact: contactSlice,
    news: newSlice,
  },
});
