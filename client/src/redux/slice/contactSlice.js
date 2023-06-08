import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contacts: {
      isFetching: false,
      isError: false,
      listContacts: null,
    },
    contactType: {
      isFetching: false,
      isError: false,
      listContactType: null,
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
    getContactsStart(state) {
      state.contacts.isFetching = true;
    },
    getContactsSuccess(state, action) {
      state.contacts.isFetching = false;
      state.contacts.listContacts = action.payload;
      state.contacts.isError = false;
    },
    getContactsFailed(state) {
      state.contacts.isFetching = false;
      state.contacts.isError = true;
    },
    getContactTypeStart(state) {
      state.contactType.isFetching = true;
    },
    getContactTypeSuccess(state, action) {
      state.contactType.isFetching = false;
      state.contactType.listContactType = action.payload;
      state.contactType.isError = false;
    },
    getContactTypeFailed(state) {
      state.contactType.isFetching = false;
      state.contactType.isError = true;
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
  getContactsStart,
  getContactsSuccess,
  getContactsFailed,
  getContactTypeStart,
  getContactTypeSuccess,
  getContactTypeFailed,
  createStart,
  createSuccess,
  createFailed,
  updateStart,
  updateSuccess,
  updateFailed,
  deleteStart,
  deleteSuccess,
  deleteFailed,
} = contactSlice.actions;

export default contactSlice.reducer;
