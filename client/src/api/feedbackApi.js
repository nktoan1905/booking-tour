import axiosClient from "./axiosClient";

const feedbackApi = {
  getAllFeedback() {
    const url = `/v1/feedbacks/`;
    return axiosClient.get(url);
  },

};

export default feedbackApi;
