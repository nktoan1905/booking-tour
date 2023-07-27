import authApi from "../../api/authApi";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  logoutFailed,
  logoutStart,
  logoutSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
  resetFailed,
  resetStart,
  resetSuccess,
} from "../slice/authSlice";

export const loginUser = async (user, dispatch, navigate, toast) => {
  dispatch(loginStart());
  try {
    const res = await authApi.login(user);
    dispatch(loginSuccess(res.data.data));
    toast.success("Đăng nhập thành công");
    navigate("/");
  } catch (error) {
    toast.error("Tài khoản hoặc mật khẩu không đúng xin vui lòng thử lại");
    dispatch(loginFailed());
  }
};
export const registerUser = async (email, dispatch, navigate, toast) => {
  dispatch(registerStart());
  try {
    const res = await authApi.register(email);
    dispatch(registerSuccess());
    toast.success("Tạo tài khoản thành công!");
    navigate("/auth/login");
  } catch (error) {
    toast.error("Email này đã tồn tại xin vui lòng thử lại sau!");
    dispatch(registerFailed());
  }
};
export const resetPassword = async (email, dispatch, navigate, toast) => {
  dispatch(resetStart());
  try {
    const res = await authApi.reset(email);
    dispatch(resetSuccess());
    toast.success("Password mới đã gửi vào email vui lòng check email");
    navigate("/auth/login");
  } catch (error) {
    toast.error(
      "Email không tồn tại xin vui lòng liên hệ với bộ phân chăm sóc khách hàng"
    );
    dispatch(resetFailed());
  }
};
export const logoutUser = async (accessToken, dispatch, navigate, toast) => {
  dispatch(logoutStart());
  try {
    const res = await authApi.logout(accessToken);
    toast.success("Logout thành công!");
    navigate("/");
    dispatch(logoutSuccess()); /*  */
  } catch (error) {
    console.log(error);
    toast.error("Logout thất bại!");
    dispatch(logoutFailed());
  }
};
