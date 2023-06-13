import { createSlice } from "@reduxjs/toolkit";

const tourSlice = createSlice({
  name: "tours",
  initialState: {
    tours: {
      isFetching: false,
      isError: false,
      tours: null,
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
    getAllToursStart: (state) => {
      state.tours.isFetching = true;
    },
    getAllToursSuccess: (state, action) => {
      state.tours.isFetching = false;
      state.tours.isError = false;
      state.tours.tours = action.payload;
    },
    getAllToursFailed: (state) => {
      state.tours.isFetching = false;
      state.tours.isError = true;
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
  getAllToursStart,
  getAllToursSuccess,
  getAllToursFailed,
  createStart,
  createSuccess,
  createFailed,
  updateStart,
  updateSuccess,
  updateFailed,
  deleteStart,
  deleteSuccess,
  deleteFailed,
} = tourSlice.actions;

export default tourSlice.reducer;
