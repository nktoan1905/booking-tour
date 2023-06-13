import departureDayApi from "../../api/departureDay";
import {
  createFailed,
  createStart,
  createSuccess,
  deleteFailed,
  deleteStart,
  deleteSuccess,
  getAllDepartureDaysAndToursFailed,
  getAllDepartureDaysAndToursStart,
  getAllDepartureDaysAndToursSuccess,
  getAllDepartureDaysFailed,
  getAllDepartureDaysStart,
  getAllDepartureDaysSuccess,
  updateFailed,
  updateStart,
  updateSuccess,
} from "../slice/departureDaySlice";

export const getAllDepartureDay = async (dispatch) => {
  dispatch(getAllDepartureDaysStart());
  try {
    const res = await departureDayApi.getAllDepartureDays();
    dispatch(getAllDepartureDaysSuccess(res.data.data));
  } catch (error) {
    dispatch(getAllDepartureDaysFailed());
  }
};

export const getAllDepartureDaysAndTours = async (dispatch) => {
  dispatch(getAllDepartureDaysAndToursStart());
  try {
    const res = await departureDayApi.getAllDepartureDaysAndTours();
    dispatch(getAllDepartureDaysAndToursSuccess(res.data.data));
  } catch (error) {
    dispatch(getAllDepartureDaysAndToursFailed());
  }
};

export const creatDepartureDay = async (dispatch, toast, data, accessToken) => {
  dispatch(createStart());
  try {
    const res = await departureDayApi.creatDepartureDay(data, accessToken);
    const reGetDepartureDays = await departureDayApi.getAllDepartureDays();
    dispatch(getAllDepartureDaysSuccess(reGetDepartureDays.data.data));
    dispatch(createSuccess());
    toast.success("Tạo thành công");
  } catch (error) {
    toast.error("Tạo thất bại");
    dispatch(createFailed());
  }
};

export const updateDepartureDayStatus = async (
  dispatch,
  toast,
  data,
  departureDayId,
  accessToken
) => {
  dispatch(updateStart());
  try {
    const res = await departureDayApi.updateStatusDepartureDay(
      data,
      departureDayId,
      accessToken
    );
    const reGetDepartureDays = await departureDayApi.getAllDepartureDays();
    dispatch(getAllDepartureDaysSuccess(reGetDepartureDays.data.data));
    toast.success("Cập nhật thành công");
    dispatch(updateSuccess());
  } catch (error) {
    toast.error("Cập nhật thất bại");
    dispatch(updateFailed());
  }
};

export const deleteDePartureDay = async (
  dispatch,
  toast,
  departureDayId,
  accessToken
) => {
  dispatch(deleteStart());
  try {
    const res = await departureDayApi.deleteDePartureDay(
      departureDayId,
      accessToken
    );
    const reGetDepartureDays = await departureDayApi.getAllDepartureDays();
    dispatch(getAllDepartureDaysSuccess(reGetDepartureDays.data.data));
    toast.success("Xóa thành công");
    dispatch(deleteSuccess());
  } catch (error) {
    toast.error("Xóa thất bại");
    dispatch(deleteFailed());
  }
};
