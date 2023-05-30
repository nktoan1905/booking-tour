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
			} else res.status(HttpStatusCode.NOT_FOUND).json({ message });
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
			} else res.status(HttpStatusCode.NOT_FOUND).json({ message });
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleGetAllAdmins: async (req, res) => {
		try {
			console.log("abcd")
			const { status, message, admins } = await userServices.getAllAdmins();
			if (status) {
				res.status(HttpStatusCode.OK).json({
					message: message,
					data: admins,
				});
			} else res.status(HttpStatusCode.NOT_FOUND).json({ message });
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
			} else res.status(HttpStatusCode.NOT_FOUND).json({ message });
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
			} else res.status(HttpStatusCode.NOT_FOUND).json({ message });
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleUpdateProfile: async (req, res) => {
		console.log(req.data);
		try {
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
				res.status(HttpStatusCode.NOT_FOUND).json(message);
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
				res.status(HttpStatusCode.NOT_FOUND).json({ message });
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
			const { status, message } = await userServices.deleteEmployeeById(req.params.emloyeeId);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.NOT_FOUND).json({ message });
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
			const { status, message } = await userServices.deleteMemberById(req.params.memberId);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.NOT_FOUND).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleUpdatePassword: async (req, res) => {
		try {
			const { status, message } = await userServices.updatePassword(
				req.user.id,
				req.body.confirmPassword,
				req.body.newPassword,
			);
			if (status === true) {
				res.status(HttpStatusCode.OK).json({ message: message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message: message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleGetAllTourIdIsFlowingByUserId: async (req, res) => {
		try {
			const { status, message, listTourInfomation } = await userServices.getAllTourIdIsFlowingByUserId(req.user.id);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message: message, data: listTourInfomation });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleAddNewFlowingTourByTourId: async (req, res) => {
		try {
			const { status, message } = await userServices.addNewFlowingTourByTourId(
				req.user.id,
				req.body.tourId,
				req.body.dayStart,
			);
			if (status) {
				res.status(HttpStatusCode.CREATED).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleDeleteFlowingTourByTourId: async (req, res) => {
		try {
			const { status, message } = await userServices.deleteFlowingTourByTourId(
				req.user.id,
				req.body.tourId,
				req.body.dayStart,
			);
			if (status) {
				res.status(HttpStatusCode.CREATED).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
};
export default userController;
