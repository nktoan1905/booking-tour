import axiosClient from "./axiosClient";

const categoryApi = {
  getAllCategories() {
    const url = `/v1/categories/`;
    return axiosClient.get(url);
  },
  createNewCategory(data, accessToken) {
    const url = `/v1/categories/register`;
    return axiosClient.post(url, data, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  updateCategory(dataUpdate, categoryId, accessToken) {
    const url = `/v1/categories/${categoryId}`;
    return axiosClient.put(url, dataUpdate, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  deleteCategory(categoryId, accessToken) {
    const url = `/v1/categories/${categoryId}`;
    return axiosClient.delete(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
};

export default categoryApi;
