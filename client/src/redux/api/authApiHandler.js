import authApi from "../../api/authApi";
import { loginFailed, loginStart, loginSuccess } from "../slice/authSlice";

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
