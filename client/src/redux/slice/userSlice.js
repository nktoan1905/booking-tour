import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    admins: {
      listAdmins: null,
      isFetching: false,
      isError: false,
    },
    users: {
      listUsers: null,
      isFetching: false,
      isError: false,
    },
    employees: {
      listEmployees: null,
      isFetching: false,
      isError: false,
    },
    update: {
      isFetching: false,
      isError: false,
    },
    create: {
      isFetching: false,
      isError: false,
    },
  },
  reducers: {
    getAllAdminsStart: (state) => {
      state.admins.isFetching = true;
    },
    getAllAdminsSuccess: (state, action) => {
      state.admins.isFetching = false;
      state.admins.listAdmins = action.payload;
      state.admins.isError = false;
    },
    getAllAdminsFailed: (state) => {
      state.admins.isFetching = false;
      state.admins.isError = true;
    },
    getAllUsersStart: (state) => {
      state.users.isFetching = true;
    },
    getAllUsersSuccess: (state, action) => {
      state.users.isFetching = false;
      state.users.listUsers = action.payload;
      state.users.isError = false;
    },
    getAllUsersFailed: (state) => {
      state.users.isFetching = false;
      state.users.isError = true;
    },
    getAllEmployeesStart: (state) => {
      state.employees.isFetching = true;
    },
    getAllEmployeesSuccess: (state, action) => {
      state.employees.isFetching = false;
      state.employees.listEmployees = action.payload;
      state.employees.isError = false;
    },
    getAllEmployeesFailed: (state) => {
      state.employees.isFetching = false;
      state.employees.isError = true;
    },
    updateStart: (state) => {
      state.update.isFetching = true;
    },
    updateSuccess: (state) => {
      state.update.isFetching = false;
      state.update.isError = false;
    },
    updateFailed: (state) => {
      state.update.isFetching = false;
      state.update.isError = true;
    },
    createStart: (state) => {
      state.create.isFetching = true;
    },
    createSuccess: (state) => {
      state.create.isFetching = false;
      state.create.isError = false;
    },
    createFailed: (state) => {
      state.create.isFetching = false;
      state.create.isError = true;
    },
  },
});

export const {
  getAllAdminsStart,
  getAllAdminsSuccess,
  getAllAdminsFailed,
  getAllEmployeesStart,
  getAllEmployeesSuccess,
  getAllEmployeesFailed,
  getAllUsersStart,
  getAllUsersSuccess,
  getAllUsersFailed,
  updateStart,
  updateSuccess,
  updateFailed,
  createStart,
  createSuccess,
  createFailed,
} = userSlice.actions;

export default userSlice.reducer;
