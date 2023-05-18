import axiosClient from "./axiosClient";

const newsApi = {
  gellAllNews() {
    const url = "/v1/news/";
    return axiosClient.get(url);
  },
  createNews() {},
  getAllNewsCategories() {},
  updateNews() {},
  updateStatusNews() {},
};

export default newsApi;
