import axiosClient from "./axiosClient";

const paymentApi = {
  getConfig(accessToken) {
    const url = `/v1/payment/config`;
    return axiosClient.get(url, {
      headers: {
        token: `Bearer ${accessToken}`,
      },
    });
  },
  payment(accessToken, amount) {
    const url = `/v1/payment/create-payment-intent`;
    return axiosClient.post(
      url,
      {
        amount: amount,
      },
      {
        headers: {
          token: `Bearer ${accessToken}`,
        },
      }
    );
  },
};

export default paymentApi;
