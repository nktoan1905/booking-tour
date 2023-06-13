import { createSlice } from "@reduxjs/toolkit";

const promotionSlice = createSlice({
  name: "promotion",
  initialState: {
    promotions: {
      isFetching: false,
      isError: false,
      promotions: null,
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
    getAllPromotionsStart: (state) => {
      state.promotions.isFetching = true;
    },
    getAllPromotionsSuccess: (state, action) => {
      state.promotions.isFetching = false;
      state.promotions.isError = false;
      state.promotions.promotions = action.payload;
    },
    getAllPromotionsFailed: (state) => {
      state.promotions.isFetching = false;
      state.promotions.isError = true;
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

export const {} = promotionSlice.actions;

export default promotionSlice.reducer;
