import userApi from "../../api/userApi";
import {
  getAllAdminsFailed,
  getAllAdminsStart,
  getAllAdminsSuccess,
  getAllEmployeesFailed,
  getAllEmployeesStart,
  getAllEmployeesSuccess,
  getAllUsersFailed,
  getAllUsersStart,
  getAllUsersSuccess,
} from "../slice/userSlice";

export const getAllAdmins = async (dispatch, accessToken) => {
  dispatch(getAllAdminsStart());
  try {
    const res = await userApi.getAllAdmins(accessToken);
    dispatch(getAllAdminsSuccess(res.data));
  } catch (error) {
    console.log(error)
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
