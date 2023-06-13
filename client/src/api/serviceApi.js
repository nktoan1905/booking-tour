import axiosClient from "./axiosClient";

const serviceApi = {
  getAllServices() {
    const url = `/v1/services/`;
    return axiosClient.get(url);
  },
  createNewService(data, accessToken) {
    const url = `/v1/services/register`;
    return axiosClient.post(url, data, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  updateService(dataUpdate, serviceId, accessToken) {
    const url = `/v1/services/${serviceId}`;
    return axiosClient.put(url, dataUpdate, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  deleteService(serviceId, accessToken) {
    const url = `/v1/services/${serviceId}`;
    return axiosClient.delete(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
};

export default serviceApi;
