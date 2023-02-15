import HttpStatusCode from '../helpers/httpStatusCode';
import userServices from '../services/userServices';

const userController = {
	handleGetAllMembers: async (req, res) => {
		try {
			const { status, message, members } = await userServices.getAllMembers();
			if (status) {
				res.status(HttpStatusCode.OK).json({
					message: message,
					data: members,
				});
			} else res.status(404).json({ message });
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleGetAllEmployees: async (req, res) => {
		try {
			const { status, message, employees } = await userServices.getAllEmployees();
			if (status) {
				res.status(HttpStatusCode.OK).json({
					message: message,
					data: employees,
				});
			} else res.status(404).json({ message });
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleGetAllAdmins: async (req, res) => {
		try {
			const { status, message, admins } = await userServices.getAllEmployees();
			if (status) {
				res.status(HttpStatusCode.OK).json({
					message: message,
					data: admins,
				});
			} else res.status(404).json({ message });
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleGetUserProfile: async (req, res) => {
		try {
			const { status, message, userProfile } = await userServices.getUserProfileById(req.user.id);
			if (status) {
				res.status(HttpStatusCode.OK).json({
					message: message,
					data: userProfile,
				});
			} else res.status(404).json({ message });
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleCreateNewEmployee: async (req, res) => {
		try {
			const { status, message } = await userServices.createEmployee(req.body);
			if (status) {
				res.status(HttpStatusCode.OK).json({
					message,
				});
			} else res.status(404).json({ message });
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleUpdateProfile: async (req, res) => {
		try {
			console.log(req.body);
			const { status, message, newUserInfo } = await userServices.updateUserProfile(req.user.id, req.body);
			if (status) {
				res.status(HttpStatusCode.OK).json({
					message: message,
					newData: newUserInfo,
				});
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleUpdateMemberAndEmployeeStatus: async (req, res) => {
		try {
			if (!req.id) {
				res.status(HttpStatusCode.BAD_REQUEST);
			}
			const { status, message } = await userServices.updateMemberAndEmployeeStatus(req.id);
			if (status) {
				res.status(HttpStatusCode.OK).json(message);
			} else {
				res.status(404).json(message);
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleUpdateMemberRole: async (req, res) => {
		try {
			if (!req.params.id || !req.body) {
				res.status(HttpStatusCode.BAD_REQUEST);
			}
			const { status, message } = await userServices.updateMemberRole(req.params.id, req.body);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(404).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleDeleteEmployeeById: async (req, res) => {
		try {
			if (!req.params.id) {
				res.status(HttpStatusCode.BAD_REQUEST);
			}
			const { status, message } = await userServices.deleteEmployeeById(req.params.id);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(404).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleDeleteMemberById: async (req, res) => {
		try {
			if (!req.params.id) {
				res.status(HttpStatusCode.BAD_REQUEST);
			}
			const { status, message } = await userServices.deleteMemberById(req.params.id);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(404).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
};
export default userController;
