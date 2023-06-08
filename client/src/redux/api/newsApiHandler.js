import newsApi from "../../api/newsApi";
import {
  deleteFailed,
  deleteStart,
  deleteSuccess,
  getNewsCategoriesFailed,
  getNewsCategoriesStart,
  getNewsCategoriesSuccess,
  getNewsFailed,
  getNewsStart,
  getNewsSuccess,
  updateFailed,
  updateStart,
  updateSuccess,
} from "../slice/newSlice";

export const getAllNews = async (dispatch) => {
  dispatch(getNewsStart());
  try {
    const res = await newsApi.getAllNews();
    dispatch(getNewsSuccess(res.data.data));
  } catch (error) {
    dispatch(getNewsFailed());
  }
};
export const getAllNewsCategories = async (dispatch) => {
  dispatch(getNewsCategoriesStart());
  try {
    const res = await newsApi.getAllNewsCategories();
    dispatch(getNewsCategoriesSuccess(res.data.data));
  } catch (error) {
    dispatch(getNewsCategoriesFailed());
  }
};
export const updateNewsContent = async (
  dispatch,
  toast,
  accessToken,
  newsId,
  data
) => {
  dispatch(updateStart());
  try {
    const res = await newsApi.updateContent(data, newsId, accessToken);
    toast.success("Cập nhật thành công");
    dispatch(updateSuccess());
  } catch (error) {
    toast.error("Cập nhật thất bại");
    dispatch(updateFailed());
  }
};
export const updateNewsStatus = async (
  dispatch,
  toast,
  accessToken,
  newsId,
  data
) => {
  dispatch(updateStart());
  try {
    const res = await newsApi.updateStatus(data.status, newsId, accessToken);
    toast.success("Cập nhật thành công");
    dispatch(updateSuccess());
  } catch (error) {
    toast.error("Cập nhật thất bại");
    dispatch(updateFailed());
  }
};
export const deleteNews = async (dispatch, toast, accessToken, newsId) => {
  dispatch(deleteStart());
  try {
    const res = await newsApi.delete(newsId, accessToken);
    toast.success("Xóa thành công");
    dispatch(deleteSuccess());
  } catch (error) {
    toast.error("Xóa thất bại");
    dispatch(deleteFailed());
  }
};
