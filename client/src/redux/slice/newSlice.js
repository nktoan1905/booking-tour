import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    newsList: {
      newsList: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    getAllNewsStart: (state) => {
      state.newsList.isFetching = true;
    },
    getAllNewsSuccess: (state, action) => {
      state.newsList.isFetching = false;
      state.newsList.newsList = action.payload;
      state.newsList.error = false;
    },
    getAllNewsFailed: (state) => {
      state.newsList.isFetching = false;
      state.newsList.error = true;
    },
  },
});
export const { getAllNewsStart, getAllNewsSuccess, getAllNewsFailed } =
  newsSlice.actions;

export default newsSlice.reducer;
