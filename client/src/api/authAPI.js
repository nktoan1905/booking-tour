import axiosClient from './axiosClient';
const authAPI = {
	register: (data) => {
		const url = '/v1/auth/register';
		return axiosClient.post(url, data);
	},
	login: (data) => {
		const url = '/v1/auth/login';
		return axiosClient.post(url, data);
	},
	refreshToken: () => {
		const url = '/v1/auth/refresh';
		return axiosClient.post(url);
	},
	logout: (accessToken) => {
		const url = '/v1/auth/logout';
		return axiosClient.post(url, data, {
			headers: {
				token: `Bearer ${accessToken}`,
			},
		});
	},
};
export default authAPI;
