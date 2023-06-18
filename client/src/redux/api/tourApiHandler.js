import tourApi from "../../api/tourApi";
import {
  createFailed,
  createStart,
  createSuccess,
  getAllToursFailed,
  getAllToursStart,
  getAllToursSuccess,
} from "../slice/tourSlice";

export const createNewTour = async (
  dispatch,
  toast,
  navigate,
  data,
  accessToken
) => {
  dispatch(createStart());
  try {
    const res = await tourApi.createNewsTour(data, accessToken);
    const reGetTours = await tourApi.getAllTours();
    dispatch(getAllToursSuccess(reGetTours.data.data));
    toast.success("Tạo thành công");
    navigate("/admin/tours/");
    dispatch(createSuccess());
  } catch (error) {
    toast.error("Tạo thất bại");
    dispatch(createFailed());
  }
};
export const getAllTours = async (dispatch) => {
  dispatch(getAllToursStart());
  try {
    const res = await tourApi.getAllTours();
    dispatch(getAllToursSuccess(res.data.data));
  } catch (error) {
    dispatch(getAllToursFailed());
  }
};
