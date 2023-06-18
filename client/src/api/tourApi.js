import axiosClient from "./axiosClient";

const tourApi = {
  getAllTours() {
    const url = `/v1/tours/`;
    return axiosClient.get(url);
  },
  createNewsTour(data, accessToken) {
    const url = `/v1/tours/resgister`;
    return axiosClient.post(url, data, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  updateTour(dataUpdate, tourId, accessToken) {
    const url = `/v1/tours/${tourId}`;
    return axiosClient.put(url, dataUpdate, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  deleteTour(tourId, accessToken) {
    const url = `/v1/tours/${tourId}`;
    return axiosClient.delete(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
};

export default tourApi;
