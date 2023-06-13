import { createSlice } from "@reduxjs/toolkit";

const serviceSlice = createSlice({
  name: "service",
  initialState: {
    services: {
      isFetching: false,
      isError: false,
      services: null,
    },
    create: {
      isFetching: false,
      isError: false,
    },
    update: {
      isFetching: false,
      isError: false,
    },
    delete: {
      isFetching: false,
      isError: false,
    },
  },
  reducers: {
    getAllServicesStart: (state) => {
      state.services.isFetching = true;
    },
    getAllServicesSuccess: (state, action) => {
      state.services.isFetching = false;
      state.services.isError = false;
      state.services.services = action.payload;
    },
    getAllServicesFailed: (state) => {
      state.services.isFetching = false;
      state.services.isError = true;
    },
    createStart(state) {
      state.create.isFetching = true;
    },
    createSuccess(state) {
      state.create.isFetching = false;
      state.create.isError = false;
    },
    createFailed(state) {
      state.create.isFetching = false;
      state.create.isError = true;
    },
    updateStart(state) {
      state.update.isFetching = true;
    },
    updateSuccess(state) {
      state.update.isFetching = false;
      state.update.isError = false;
    },
    updateFailed(state) {
      state.update.isFetching = false;
      state.update.isError = true;
    },
    deleteStart(state) {
      state.delete.isFetching = true;
    },
    deleteSuccess(state) {
      state.delete.isFetching = false;
      state.delete.isError = false;
    },
    deleteFailed(state) {
      state.delete.isFetching = true;
    },
  },
});

export const {
  getAllServicesStart,
  getAllServicesSuccess,
  getAllServicesFailed,
  createStart,
  createSuccess,
  createFailed,
  updateStart,
  updateSuccess,
  updateFailed,
  deleteStart,
  deleteSuccess,
  deleteFailed,
} = serviceSlice.actions;

export default serviceSlice.reducer;
