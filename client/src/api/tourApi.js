import axiosClient from "./axiosClient";

const tourApi = {
  getAllTours() {
    const url = `/v1/tours/`;
    return axiosClient.get(url);
  },
  getAllDepartureDayOfTour(tourId) {
    const url = `/v1/tours/${tourId}/departure-day`;
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
  createOrder(data, accessToken) {
    const url = `/v1/tours/create-order`;
    return axiosClient.post(url, data, {
      headers: {
        token: `Beaer ${accessToken}`,
      },
    });
  },
  getTheQuantityOrderedOfTourDepartureDay(tourDepartureDayId) {
    const url = `/v1/tours/ordered/${tourDepartureDayId}`;
    return axiosClient.get(url);
  },
  getAllOrder(accessToken) {
    const url = `/v1/tours/orders`;
    return axiosClient.get(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  getAllDepartureDayAndTransaction(accessToken) {
    const url = `/v1/tours/departure-days/orders`;
    return axiosClient.get(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  getAllTransactionsByDepartureDayId(departureDayId, accessToken) {
    const url = `/v1/tours/departure-days/orders/${departureDayId}`;
    return axiosClient.get(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  updateStatusTransaction(transactionId, data, accessToken) {
    const url = `/v1/tours/orders/${transactionId}`;
    return axiosClient.put(
      url,
      { status: data.status },
      {
        headers: { token: `Bearer ${accessToken}` },
      }
    );
  },
  getAllFlowingByTourDepartureDay: (tourDepartureDayId) => {
    const url = `/v1/tours/user-flowing/${tourDepartureDayId}`;
    return axiosClient.get(url);
  },
  getAllFeedbacksByTourId(tourId) {
    const url = `/v1/tours/${tourId}/feedbacks`;
    return axiosClient.get(url);
  },
  getAllToursInCountry() {
    const url = "/v1/tours/tour-in-country";
    return axiosClient.get(url);
  },
  getAllToursOurCountry() {
    const url = "/v1/tours/tour-Our-country";
    return axiosClient.get(url);
  },
};

export default tourApi;
