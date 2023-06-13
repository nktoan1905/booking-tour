import newsApi from "../../api/newsApi";
import { createFailed } from "../slice/newSlice";
import { createSuccess } from "../slice/newSlice";
import { createStart } from "../slice/newSlice";
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
  navigate,
  newsId,
  data
) => {
  dispatch(updateStart());
  try {
    const res = await newsApi.updateContent(data, newsId, accessToken);
    const reGetNews = await newsApi.getAllNews();
    toast.success("Cập nhật thành công");
    navigate(-1);
    dispatch(getNewsSuccess(reGetNews.data.data));
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
    const reGetNews = await newsApi.getAllNews();
    toast.success("Cập nhật thành công");
    dispatch(updateSuccess());
    dispatch(getNewsSuccess(reGetNews.data.data));
  } catch (error) {
    toast.error("Cập nhật thất bại");
    dispatch(updateFailed());
  }
};
export const deleteNews = async (
  dispatch,
  toast,
  navigate,
  accessToken,
  newsId
) => {
  dispatch(deleteStart());
  try {
    const res = await newsApi.delete(newsId, accessToken);
    const reGetAllNewsRes = await newsApi.getAllNews();
    dispatch(getNewsSuccess(reGetAllNewsRes.data.data));
    toast.success("Xóa thành công");
    navigate(-1);
    dispatch(deleteSuccess());
  } catch (error) {
    console.log(error);
    toast.error("Xóa thất bại");
    dispatch(deleteFailed());
  }
};
export const createNews = async (
  dispatch,
  toast,
  navigate,
  data,
  accessToken
) => {
  dispatch(createStart());
  try {
    const res = await newsApi.create(data, accessToken);
    const reGetAllNewsRes = await newsApi.getAllNews();
    dispatch(createSuccess());
    dispatch(getNewsSuccess(reGetAllNewsRes.data.data));
    navigate("/admin/news");
    toast.success("Tạo thành công!");
  } catch (error) {
    toast.error("Tạo thành thất bại!");
    dispatch(createFailed());
  }
};
