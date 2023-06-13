import axiosClient from "./axiosClient";

const promotionApi = {
  getAllPromotions() {
    const url = `/v1/promotions/`;
    return axiosClient.get(url);
  },
  createNewPromotion(data, accessToken) {
    const url = `/v1/promotions/register`;
    return axiosClient.post(url, data, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  updatePromotion(dataUpdate, promotionId, accessToken) {
    const url = `/v1/promotions/${promotionId}`;
    return axiosClient.put(url, dataUpdate, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  deletePromotion(promotionId, accessToken) {
    const url = `/v1/promotions/${promotionId}`;
    return axiosClient.delete(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
};

export default promotionApi;
