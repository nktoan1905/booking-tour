import axiosClient from "./axiosClient";

const departureDayApi = {
  getAllDepartureDays() {
    const url = `/v1/departure-day/`;
    return axiosClient.get(url);
  },
  getAllDepartureDaysAndTours() {
    const url = `/v1/departure-day/tours`;
    return axiosClient.get(url);
  },
  creatDepartureDay(data, accessToken) {
    const url = `/v1/departure-day/register`;
    return axiosClient.post(url, data, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  updateStatusDepartureDay(data, departureDayId, accessToken) {
    const url = `/v1/departure-day/${departureDayId}/status`;
    return axiosClient.put(url, data, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  updateDayStartDepartureDay(data, departureDayId, accessToken) {
    const url = `/v1/departure-day/${departureDayId}/day-start`;
    return axiosClient.post(url, data, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  deleteDePartureDay(departureDayId, accessToken) {
    const url = `/v1/departure-day/${departureDayId}`;
    return axiosClient.delete(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
};

export default departureDayApi;
