import axiosClient from "./axiosClient";

const userApi = {
  getAllAdmins(accessToken) {
    const url = `/v1/admin/admins`;
    return axiosClient.get(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  getAllUsers(accessToken) {
    const url = `/v1/admin/members`;
    return axiosClient.get(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  getAllEmployees(accessToken) {
    const url = `/v1/admin/employees`;
    return axiosClient.get(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
};

export default userApi;
