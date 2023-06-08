import userApi from "../../api/userApi";
import { loginSuccess } from "../slice/authSlice";
import {
  createFailed,
  createStart,
  createSuccess,
  getAllAdminsFailed,
  getAllAdminsStart,
  getAllAdminsSuccess,
  getAllEmployeesFailed,
  getAllEmployeesStart,
  getAllEmployeesSuccess,
  getAllUsersFailed,
  getAllUsersStart,
  getAllUsersSuccess,
  updateFailed,
  updateStart,
  updateSuccess,
} from "../slice/userSlice";

export const getAllAdmins = async (dispatch, accessToken) => {
  dispatch(getAllAdminsStart());
  try {
    const res = await userApi.getAllAdmins(accessToken);
    dispatch(getAllAdminsSuccess(res.data));
  } catch (error) {
    dispatch(getAllAdminsFailed());
  }
};
export const getAllUsers = async (dispatch, accessToken) => {
  dispatch(getAllUsersStart());
  try {
    const res = await userApi.getAllUsers(accessToken);
    dispatch(getAllUsersSuccess(res.data));
  } catch (error) {
    dispatch(getAllUsersFailed());
  }
};
export const getAllEmployees = async (dispatch, accessToken) => {
  dispatch(getAllEmployeesStart());
  try {
    const res = await userApi.getAllEmployees(accessToken);
    dispatch(getAllEmployeesSuccess(res.data));
  } catch (error) {
    dispatch(getAllEmployeesFailed());
  }
};

export const updateUserPassword = async (
  dispatch,
  accessToken,
  newPassword,
  oldPassword,
  toast
) => {
  dispatch(updateStart());
  try {
    const res = await userApi.updatePassowrd(
      accessToken,
      newPassword,
      oldPassword
    );
    toast.success("Cập nhất thành công");
    dispatch(updateSuccess());
  } catch (error) {
    toast.error("Cập nhật thất bại");
    dispatch(updateFailed());
  }
};

export const updateUserProfile = async (
  dispatch,
  accessToken,
  navigate,
  toast,
  dataUpdate
) => {
  dispatch(updateStart());
  try {
    const res = await userApi.updateProfile(accessToken, dataUpdate);
    toast.success("Cập nhật thành công");
    dispatch(loginSuccess({ accessToken: accessToken, user: res.data.newData }));
    dispatch(updateSuccess());
    navigate("/me/profile");
  } catch (error) {
    toast.error("Cập nhật thất bại");
    console.log(error);
    dispatch(updateFailed());
  }
};

export const createNewEmloyee = async (dispatch, data, toast, accessToken) => {
  dispatch(createStart());
  try {
    const res = await userApi.createNewEmployee(accessToken, data);
    toast.success("Tạo mới nhân viên thành công");
    dispatch(createSuccess());
  } catch (error) {
    toast.error("Email đã tồn tại");
    dispatch(createFailed());
  }
};
