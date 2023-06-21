import tourApi from "../../api/tourApi";
import {
  createFailed,
  createStart,
  createSuccess,
  getAllToursFailed,
  getAllToursStart,
  getAllToursSuccess,
  updateFailed,
  updateStart,
  updateSuccess,
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
    await getAllTours(dispatch);
    toast.success("Tạo thành công");
    navigate("/admin/tours");
    dispatch(createSuccess());
  } catch (error) {
    toast.error("Tạo thất bại");
    dispatch(createFailed());
  }
};
export const updateTour = async (
  dispatch,
  toast,
  navigate,
  dataUpdate,
  tourId,
  accessToken
) => {
  dispatch(updateStart());
  try {
    const res = await tourApi.updateTour(dataUpdate, tourId, accessToken);
    await getAllTours(dispatch);
    toast.success("Cập nhật thành công");
    navigate(-1);
    dispatch(updateSuccess());
  } catch (error) {
    toast.error("Cập nhật thất bại");
    dispatch(updateFailed());
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
export const addPromotion = async (
  dispatch,
  tourId,
  promotionId,
  accessToken,
  toast
) => {
  dispatch(updateStart());
  try {
    const res = await tourApi.addPromotion(tourId, promotionId, accessToken);
    await getAllTours(dispatch);
    toast.success("Add thành công");
    dispatch(updateSuccess());
  } catch (error) {
    toast.error("Add thất bại");
    dispatch(updateFailed());
  }
};
export const removePromotion = async (
  dispatch,
  tourId,
  promotionId,
  accessToken,
  toast
) => {
  dispatch(updateStart());
  try {
    const res = await tourApi.removePromotion(tourId, promotionId, accessToken);
    await getAllTours(dispatch);
    dispatch(updateSuccess());
    toast.success("Remove thành công");
  } catch (error) {
    toast.error("Remove thất bại");
    dispatch(updateFailed);
  }
};
export const addCategory = async (
  dispatch,
  tourId,
  categoryId,
  accessToken,
  toast
) => {
  dispatch(updateStart());
  try {
    const res = await tourApi.addCategory(tourId, categoryId, accessToken);
    await getAllTours(dispatch);
    toast.success("Add thành công");
    dispatch(updateSuccess());
  } catch (error) {
    toast.error("Add thất bại");
    dispatch(updateFailed());
  }
};
export const removeCategory = async (
  dispatch,
  tourId,
  categoryId,
  accessToken,
  toast
) => {
  dispatch(updateStart());
  try {
    const res = await tourApi.removeCategory(tourId, categoryId, accessToken);
    await getAllTours(dispatch);
    dispatch(updateSuccess());
    toast.success("Remove thành công");
  } catch (error) {
    toast.error("Remove thất bại");
    dispatch(updateFailed);
  }
};
export const addService = async (
  dispatch,
  tourId,
  serviceId,
  accessToken,
  toast
) => {
  dispatch(updateStart());
  try {
    const res = await tourApi.addService(tourId, serviceId, accessToken);
    await getAllTours(dispatch);
    toast.success("Add thành công");
    dispatch(updateSuccess());
  } catch (error) {
    toast.error("Add thất bại");
    dispatch(updateFailed());
  }
};
export const removeService = async (
  dispatch,
  tourId,
  serviceId,
  accessToken,
  toast
) => {
  dispatch(updateStart());
  try {
    const res = await tourApi.removeService(tourId, serviceId, accessToken);
    await getAllTours(dispatch);
    dispatch(updateSuccess());
    toast.success("Remove thành công");
  } catch (error) {
    toast.error("Remove thất bại");
    dispatch(updateFailed);
  }
};
export const addDepartureDay = async (
  dispatch,
  tourId,
  data,
  accessToken,
  toast
) => {
  dispatch(updateStart());
  try {
    const res = await tourApi.addDepartureDay(tourId, data, accessToken);
    await getAllTours(dispatch);
    toast.success("Add thành công");
    dispatch(updateSuccess());
  } catch (error) {
    toast.error("Add thất bại");
    dispatch(updateFailed());
  }
};
export const removeDepartureDay = async (
  dispatch,
  tourId,
  departuredayId,
  accessToken,
  toast
) => {
  dispatch(updateStart());
  try {
    const res = await tourApi.removeDepartureDay(tourId, departuredayId, accessToken);
    await getAllTours(dispatch);
    toast.success("Remove thành công");
    dispatch(updateSuccess());
  } catch (error) {
    toast.error("Remove thất bại");
    dispatch(updateFailed());
  }
};
