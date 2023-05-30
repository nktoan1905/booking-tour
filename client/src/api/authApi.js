import axiosClient from "./axiosClient";

const authApi = {
  login(data) {
    const url = "/v1/auth/login";
    return axiosClient.post(url, data, { withCredentials: true });
  },
  register(data) {
    const url = "/v1/auth/register";
    return axiosClient.post(url, data);
  },
  logout(accessToken) {
    const url = "/v1/auth/logout";
    return axiosClient.post(
      url,
      {},
      {
        headers: { token: `Bearer ${accessToken}` },
      }
    );
  },
  reset(email) {
    const url = "/v1/auth/forgot-passowrd";
    return axiosClient.post(url, { email });
  },
};

export default authApi;
