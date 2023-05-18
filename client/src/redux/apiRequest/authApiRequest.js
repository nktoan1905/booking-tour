import { toast } from "react-toastify";
import authApi from "../../axios/authApi";
import {
  logOutFailed,
  logOutStart,
  logOutSuccess,
  loginFailed,
  loginStart,
  loginSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
  resetFailed,
  resetStart,
  resetSucess,
} from "../slice/authSlice";

export const loginUser = async (user, dispatch, navigate, toast) => {
  dispatch(loginStart());
  try {
    const res = await authApi.login(user);
    dispatch(loginSuccess(res.data.data));
    toast.success("Đăng nhập thành công");
    navigate("/");
  } catch (error) {
    toast.error("Đăng nhập thất bại!");
    dispatch(loginFailed());
  }
};

export const registerUser = async (newUser, dispatch, navigate, toast) => {
  dispatch(registerStart());
  try {
    const res = await authApi.register(newUser);
    dispatch(registerSuccess);
    toast.success("Tạo tài khoản thành công!");
    navigate("/auth/dang-nhap");
  } catch (error) {
    toast.error(
      "Tài khoản đã tồn tại xin vui lòng thử lại hoặc liên hệ với bên CSKH."
    );
    dispatch(registerFailed());
  }
};

export const logOutUser = async (dispatch, navigate, toast, accessToken) => {
  dispatch(logOutStart());
  try {
    const res = await authApi.logout(accessToken);
    dispatch(logOutSuccess());
    toast.success("Logout thành công.");
    navigate("/");
  } catch (error) {
    toast.error("Logout thất bại!");
    dispatch(logOutFailed());
  }
};
export const resetPasswordUser = async (dispatch, navigate, toast, email) => {
  dispatch(resetStart());
  try {
    const res = await authApi.reset(email);
    dispatch(resetSucess());
    toast.success("Mật khẩu của bạn đã được reset xin vui lòng check mail");
    navigate("/auth/dang-nhap");
  } catch (error) {
    toast.error("Email này không tồn tại!");
    dispatch(resetFailed())
  }
};
