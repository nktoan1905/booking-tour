import newsApi from "../../axios/newsApi";
import {
  getAllNewsFailed,
  getAllNewsStart,
  getAllNewsSuccess,
} from "../slice/newSlice";

export const getAllNews = async (dispatch, navigate, toast) => {
  dispatch(getAllNewsStart());
  try {
    const res = await newsApi.gellAllNews();
    dispatch(getAllNewsSuccess(res.data));
  } catch (error) {
    dispatch(getAllNewsFailed());
  }
};
