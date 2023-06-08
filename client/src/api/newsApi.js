import axiosClient from "./axiosClient";

const newsApi = {
  getAllNews() {
    const url = `/v1/news/`;
    return axiosClient.get(url);
  },
  getAllNewsCategories() {
    const url = `/v1/news/categories`;
    return axiosClient.get(url);
  },
  create(data, accessToken) {
    const url = `/v1/news/register`;
    return axiosClient.post(url, data, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  updateContent(data, newsId, accessToken) {
    const url = `/v1/news/${newsId}`;
    return axiosClient.put(url, data, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  updateStatus(status, newsId, accessToken) {
    const url = `/v1/news/${newsId}/status`;
    return axiosClient.put(
      url,
      { status: status },
      {
        headers: { token: `Bearer ${accessToken}` },
      }
    );
  },
  delete(newsId, accessToken) {
    const url = `/v1/news/${newsId}`;
    return axiosClient.delete(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
};

export default newsApi;
