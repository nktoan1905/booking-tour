import authAPI from '../../api/authAPI';
import {
	loginFailed,
	loginStart,
	loginSuccess,
	registerFailed,
	registerStart,
	registerSuccess,
} from '../slice/authSlice';

export const loginUser = async (user, dispatch, navigate, toast) => {
	dispatch(loginStart());
	try {
		const res = await authAPI.login(user);
		console.log(res);
		dispatch(loginSuccess(res.data.data));
		toast.success(res.data.status);
		navigate('/');
	} catch (error) {
		dispatch(loginFailed());
	}
};
export const registerUser = async (user, dispatch, navigate, toast) => {
	dispatch(registerStart());
	try {
		await authAPI.register(user);
		toast.success(res.data.status);
		dispatch(registerSuccess());
		navigate('/login');
	} catch (error) {
		dispatch(registerFailed());
	}
};
