import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    register: {
      isFetching: false,
      error: false,
      success: false,
    },
    logout: {
      isFetching: false,
      error: false,
    },
    resetPassword: {
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    loginFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSuccess: (state) => {
      state.register.isFetching = false;
      state.register.error = false;
      state.register.success = true;
    },
    registerFailed: (state) => {
      state.register.isFetching = false;
      state.register.error = true;
      state.register.success = false;
    },
    logOutStart: (state) => {
      state.logout.isFetching = true;
    },
    logOutFailed: (state) => {
      state.logout.isFetching = false;
      state.logout.error = true;
    },
    logOutSuccess: (state) => {
      state.logout.isFetching = false;
      state.login.currentUser = null;
      state.logout.error = false;
    },
    resetStart: (state) => {
      state.resetPassword.isFetching = true;
    },
    resetSucess: (state) => {
      state.resetPassword.isFetching = false;
      state.resetPassword.isFetching = false;
    },
    resetFailed: (state) => {
      state.resetPassword.isFetching = false;
      state.resetPassword.error = true;
    },
  },
});
export const {
  loginStart,
  loginFailed,
  loginSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
  logOutStart,
  logOutSuccess,
  logOutFailed,
  resetStart,
  resetSucess,
  resetFailed,
} = authSlice.actions;

export default authSlice.reducer;
