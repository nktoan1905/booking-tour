import { createSlice } from "@reduxjs/toolkit";

const newSlice = createSlice({
  name: "news",
  initialState: {
    news: {
      isFetching: false,
      isError: false,
      listNews: null,
    },
    newsCategories: {
      isFetching: false,
      isError: false,
      listNewsCategories: null,
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
    getNewsStart(state) {
      state.news.isFetching = true;
    },
    getNewsSuccess(state, action) {
      state.news.isFetching = false;
      state.news.listNews = action.payload;
      state.news.isError = false;
    },
    getNewsFailed(state) {
      state.news.isFetching = false;
      state.news.isError = true;
    },
    getNewsCategoriesStart(state) {
      state.newsCategories.isFetching = true;
    },
    getNewsCategoriesSuccess(state, action) {
      state.newsCategories.isFetching = false;
      state.newsCategories.listNewsCategories = action.payload;
      state.newsCategories.isError = false;
    },
    getNewsCategoriesFailed(state) {
      state.newsCategories.isFetching = false;
      state.newsCategories.isError = true;
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
  getNewsStart,
  getNewsSuccess,
  getNewsFailed,
  getNewsCategoriesStart,
  getNewsCategoriesSuccess,
  getNewsCategoriesFailed,
  createStart,
  createSuccess,
  createFailed,
  updateStart,
  updateSuccess,
  updateFailed,
  deleteStart,
  deleteSuccess,
  deleteFailed,
} = newSlice.actions;

export default newSlice.reducer;
