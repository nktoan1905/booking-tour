import serviceApi from "../../api/serviceApi";
import {
  createFailed,
  createStart,
  createSuccess,
  deleteFailed,
  deleteStart,
  deleteSuccess,
  getAllServicesStart,
  getAllServicesSuccess,
  getAllServicesFailed,
  updateFailed,
  updateStart,
  updateSuccess,
} from "../slice/serviceSlice";

export const getAllServices = async (dispatch) => {
  dispatch(getAllServicesStart());
  try {
    const res = await serviceApi.getAllServices();
    dispatch(getAllServicesSuccess(res.data.data));
  } catch (error) {
    dispatch(getAllServicesFailed());
  }
};

export const createService = async (dispatch, toast, data, accessToken) => {
  dispatch(createStart());
  try {
    const res = await serviceApi.createNewService(data, accessToken);
    const reGetService = await serviceApi.getAllServices();
    dispatch(getAllServicesSuccess(reGetService.data.data));
    toast.sucess("Tạo thành công");
    dispatch(createSuccess());
  } catch (error) {
    toast.error("Tạo thất bại");
    dispatch(createFailed);
  }
};
export const updateService = async (
  dispatch,
  toast,
  data,
  serviceId,
  accessToken
) => {
  dispatch(updateStart());
  try {
    const res = await serviceApi.updateService(data, serviceId, accessToken);
    const reGetService = await serviceApi.getAllServices();
    dispatch(getAllServicesSuccess(reGetService.data.data));
    toast.sucess("Cập nhật thành công");
    dispatch(updateSuccess());
  } catch (error) {
    toast.error("Cập nhật thất bại");
    dispatch(updateFailed());
  }
};

export const deletService = async (dispatch, toast, serviceId, accessToken) => {
  dispatch(deleteStart());
  try {
    const res = await serviceApi.deleteService(serviceId, accessToken);
    const reGetService = await serviceApi.getAllServices();
    dispatch(getAllServicesSuccess(reGetService.data.data));
    toast.sucess("Xóa thành công");
    dispatch(deleteSuccess());
  } catch (error) {
    toast.error("Xóa thất bại");
    dispatch(deleteFailed());
  }
};
