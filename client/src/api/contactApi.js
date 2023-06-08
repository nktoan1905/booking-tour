import axiosClient from "./axiosClient";

const contactApi = {
  getAllContact(accessToken) {
    const url = `/v1/contact/`;
    return axiosClient.get(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  getAllContactType() {
    const url = `/v1/contact/type`;
    return axiosClient.get(url);
  },
  createContact(data) {
    const url = `/v1/contact/register`;
    return axiosClient.post(url, data);
  },
  updateContact(contactId, data, accessToken) {
    const url = `/v1/contact/${contactId}`;
    return axiosClient.put(url, data, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  deleteConact(contactId, accessToken) {
    const url = `/v1/contact/${contactId}`;
    return axiosClient.delete(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
};

export default contactApi;
