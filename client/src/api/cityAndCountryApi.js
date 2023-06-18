import axiosClient from "./axiosClient";

const cityAndCountryApi = {
  getCityAndCountry() {
    const url = `/v1/cities/`;
    return axiosClient.get(url);
  },
  getCountryAndCity() {
    const url = `/v1/countries/`;
    return axiosClient.get(url);
  },
  createCountry(data, accessToken) {
    const url = `/v1/countries/register`;
    return axiosClient.post(url, data, {
      headers: { token: `Beaer ${accessToken}` },
    });
  },
  createCity(data, accessToken) {
    const url = `/v1/cities/register`;
    return axiosClient.post(url, data, {
      headers: { token: `Beaer ${accessToken}` },
    });
  },
  updateCoutry(data, countryId, accessToken) {
    const url = `/v1/countries/${countryId}`;
    return axiosClient.put(url, data, {
      headers: { token: `Beaer ${accessToken}` },
    });
  },
  updateCity(data, cityId, accessToken) {
    const url = `/v1/cities/${cityId}`;
    return axiosClient.put(url, data, {
      headers: { token: `Beaer ${accessToken}` },
    });
  },
  deleteCountry(countryId, accessToken) {
    const url = `/v1/countries/${countryId}`;
    return axiosClient.delete(url, {
      headers: { token: `Beaer ${accessToken}` },
    });
  },
  deleteCity(cityId, accessToken) {
    const url = `/v1/cities/${cityId}`;
    return axiosClient.delete(url, {
      headers: { token: `Beaer ${accessToken}` },
    });
  },
};

export default cityAndCountryApi;
