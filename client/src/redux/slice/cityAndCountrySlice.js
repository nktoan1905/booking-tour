import { createSlice } from "@reduxjs/toolkit";

const cityAndCountrySlice = createSlice({
  name: "cityAndCountry",
  initialState: {
    cites: {
      isFetching: false,
      isError: false,
      cites: null,
    },
    countries: {
      isFetching: false,
      isError: false,
      countries: null,
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
    getAllCitesStart: (state) => {
      state.cites.isFetching = true;
    },
    getAllCitesSuccess: (state, action) => {
      state.cites.isFetching = false;
      state.cites.isError = false;
      state.cites.cites = action.payload;
    },
    getAllCitesFailed: (state) => {
      state.cites.isFetching = false;
      state.cites.isError = true;
    },
    getAllCountriesStart: (state) => {
      state.countries.isFetching = true;
    },
    getAllCountriesSuccess: (state, action) => {
      state.countries.isFetching = false;
      state.countries.isError = false;
      state.countries.countries = action.payload;
    },
    getAllCountriesFailed: (state) => {
      state.countries.isFetching = false;
      state.countries.isError = true;
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
  getAllCitesStart,
  getAllCitesSuccess,
  getAllCitesFailed,
  getAllCountriesStart,
  getAllCountriesSuccess,
  getAllCountriesFailed,
  createStart,
  createSuccess,
  createFailed,
  updateStart,
  updateSuccess,
  updateFailed,
  deleteStart,
  deleteSuccess,
  deleteFailed,
} = cityAndCountrySlice.actions;

export default cityAndCountrySlice.reducer;
