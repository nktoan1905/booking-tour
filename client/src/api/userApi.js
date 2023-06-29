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
  updatePassowrd(accessToken, newPassword, oldPassword) {
    const url = `/v1/user/update-password`;
    return axiosClient.put(
      url,
      {
        newPassword: newPassword,
        oldPassword: oldPassword,
      },
      { headers: { token: `Bearer ${accessToken}` } }
    );
  },
  updateProfile(accessToken, dataUpdate) {
    const url = `/v1/user/`;
    return axiosClient.put(url, dataUpdate, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  createNewEmployee(accessToken, data) {
    const url = `/v1/admin/register/employee`;
    return axiosClient.post(url, data, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  updateRole(accessToken, data, userId) {
    const url = `/v1/admin/role/${userId}`;
    return axiosClient.put(url, data, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  updateStatus(accessToken, data, userId) {
    const url = `/v1/admin/status/${userId}`;
    return axiosClient.put(url, data, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  deleteUser(accessToken, userId) {
    const url = `/v1/admin/${userId}`;
    return axiosClient.delete(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  getUserOrder(accessToken) {
    const url = `/v1/user/orders`;
    return axiosClient.get(url, { headers: { token: `Beaer ${accessToken}` } });
  },
};

export default userApi;
