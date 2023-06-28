import axiosClient from "./axiosClient";

const commentApi = {
  createComment(tourId, data, accessToken) {
    const url = `/v1/comments/${tourId}/add-comment`;
    return axiosClient.post(
      url,
      {
        text: data.text,
      },
      { headers: { token: `Bearer ${accessToken}` } }
    );
  },
  createReplyComment(commentId, data, accessToken) {
    const url = `/v1/comments/add-reply/${commentId}`;
    return axiosClient.post(
      url,
      {
        text: data.text,
      },
      { headers: { token: `Bearer ${accessToken}` } }
    );
  },
  removeComment(commentId, accessToken) {
    const url = `/v1/comments/remove/${commentId}`;
    return axiosClient.delete(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  removeReply(replyId, commentId, accessToken) {
    const url = `/v1/comments/remove/${commentId}/${replyId}`;
    return axiosClient.delete(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  },
  getAllCommentAndReply(tourId) {
    const url = `/v1/comments/${tourId}`;
    return axiosClient.get(url);
  },
};

export default commentApi;
