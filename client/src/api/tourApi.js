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
  addCategory(tourId, categoryId, accessToken) {
    const url = `/v1/tours/${tourId}/categories/add`;
    return axiosClient.post(
      url,
      {
        categoryId: categoryId,
      },
      {
        headers: { token: `Bearer ${accessToken}` },
      }
    );
  },
  removeCategory(tourId, categoryId, accessToken) {
    const url = `/v1/tours/${tourId}/categories/remove/${categoryId}`;
    return axiosClient.delete(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  addPromotion(tourId, promotionId, accessToken) {
    const url = `/v1/tours/${tourId}/promotions/add`;
    return axiosClient.post(
      url,
      {
        promotionId: promotionId,
      },
      {
        headers: { token: `Bearer ${accessToken}` },
      }
    );
  },
  removePromotion(tourId, promotionId, accessToken) {
    const url = `/v1/tours/${tourId}/promotions/remove/${promotionId}`;
    return axiosClient.delete(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  addService(tourId, serviceId, accessToken) {
    const url = `/v1/tours/${tourId}/services/add`;
    return axiosClient.post(
      url,
      {
        serviceId: serviceId,
      },
      {
        headers: { token: `Bearer ${accessToken}` },
      }
    );
  },
  removeService(tourId, serviceId, accessToken) {
    const url = `/v1/tours/${tourId}/services/remove/${serviceId}`;
    return axiosClient.delete(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  addDepartureDay(tourId, data, accessToken) {
    const url = `/v1/tours/${tourId}/departureDays/add`;
    return axiosClient.post(
      url,
      {
        departureDayId: data.departureDayId,
        startPlace: data.startPlace,
      },
      {
        headers: { token: `Bearer ${accessToken}` },
      }
    );
  },
  removeDepartureDay(tourId, departureDayId, accessToken) {
    const url = `/v1/tours/${tourId}/departureDays/remove/${departureDayId}`;
    return axiosClient.delete(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  addImage(tourId, data, accessToken) {
    const url = `/v1/tours/${tourId}/image/add`;
    return axiosClient.post(
      url,
      {
        imageName: data.imageName,
        imageLink: data.imageLink,
      },
      {
        headers: { token: `Bearer ${accessToken}` },
      }
    );
  },
  removeImage(tourId, imageId, accessToken) {
    const url = `/v1/tours/${tourId}/image/remove/${imageId}`;
    return axiosClient.delete(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
};

export default tourApi;
