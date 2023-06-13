import { createSlice } from "@reduxjs/toolkit";

const departureDaySlice = createSlice({
  name: "departureDay",
  initialState: {
    departureDays: {
      isFetching: false,
      isError: false,
      departureDays: null,
    },
    departureDaysAndTours: {
      isFetching: false,
      isError: false,
      departureDaysAndTours: null,
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
    getAllDepartureDaysStart: (state) => {
      state.departureDays.isFetching = true;
    },
    getAllDepartureDaysSuccess: (state, action) => {
      state.departureDays.isFetching = false;
      state.departureDays.isError = false;
      state.departureDays.departureDays = action.payload;
    },
    getAllDepartureDaysFailed: (state) => {
      state.departureDays.isFetching = false;
      state.departureDays.isError = true;
    },
    getAllDepartureDaysAndToursStart: (state) => {
      state.departureDaysAndTours.isFetching = true;
    },
    getAllDepartureDaysAndToursSuccess: (state, action) => {
      state.departureDaysAndTours.isFetching = false;
      state.departureDaysAndTours.isError = false;
      state.departureDaysAndTours.departureDaysAndTours = action.payload;
    },
    getAllDepartureDaysAndToursFailed: (state) => {
      state.departureDaysAndTours.isFetching = false;
      state.departureDaysAndTours.isError = true;
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
  getAllDepartureDaysStart,
  getAllDepartureDaysSuccess,
  getAllDepartureDaysFailed,
  getAllDepartureDaysAndToursStart,
  getAllDepartureDaysAndToursSuccess,
  getAllDepartureDaysAndToursFailed,
  createStart,
  createSuccess,
  createFailed,
  updateStart,
  updateSuccess,
  updateFailed,
  deleteStart,
  deleteSuccess,
  deleteFailed,
} = departureDaySlice.actions;

export default departureDaySlice.reducer;
