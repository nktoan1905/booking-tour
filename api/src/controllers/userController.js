import userServices from '../services/userServices';

const userController = {
	handleGetAllMembers: async (req, res) => {
		try {
			const { status, message, members } = await userServices.getAllMembers();
			if (status) {
				res.status(200).json({
					message: message,
					data: members,
				});
			} else res.status(404).json({ message });
		} catch (error) {
			res.status(400).json(error);
		}
	},
	handleGetAllEmployees: async (req, res) => {
		try {
			const { status, message, employees } = await userServices.getAllEmployees();
			if (status) {
				res.status(200).json({
					message: message,
					data: employees,
				});
			} else res.status(404).json({ message });
		} catch (error) {
			res.status(400).json(error);
		}
	},
	handleGetAllAdmins: async (req, res) => {
		try {
			const { status, message, admins } = await userServices.getAllEmployees();
			if (status) {
				res.status(200).json({
					message: message,
					data: admins,
				});
			} else res.status(404).json({ message });
		} catch (error) {
			res.status(400).json(error);
		}
	},
	handleGetUserProfile: async (req, res) => {
		try {
			const { status, message, userProfile } = await userServices.getUserProfileById(req.user.id);
			if (status) {
				res.status(200).json({
					message: message,
					data: userProfile,
				});
			} else res.status(404).json({ message });
		} catch (error) {
			res.status(400).json(error);
		}
	},
	handleCreateNewEmployee: async (req, res) => {
		try {
			const { status, message } = await userServices.createEmployee(req.body);
			if (status) {
				res.status(200).json({
					message,
				});
			} else res.status(404).json({ message });
		} catch (error) {
			res.status(400).json(error);
		}
	},
	handleUpdateProfile: async (req, res) => {
		try {
			console.log(req.body);
			const { isUpdate } = await userServices.updateUserProfile(req.user.id, req.body);
			res.status(200).json({
				isUpdate,
			});
		} catch (error) {
			res.status(400).json(error);
		}
	},
	handleUpdateMemberAndEmployeeStatus: async (req, res) => {
		try {
			if (!req.id) {
				res.status(400);
			}
			const { status, message } = await userServices.updateMemberAndEmployeeStatus(req.id);
			if (status) {
				res.status(200).json(message);
			} else {
				res.status(404).json(message);
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
	handleUpdateMemberRole: async (req, res) => {
		try {
			if (!req.params.id || !req.body) {
				res.status(400);
			}
			const { status, message } = await userServices.updateMemberRole(req.params.id, req.body);
			if (status) {
				res.status(200).json({ message });
			} else {
				res.status(404).json({ message });
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
	handleDeleteEmployeeById: async (req, res) => {
		try {
			if (!req.params.id) {
				res.status(400);
			}
			const { status, message } = await userServices.deleteEmployeeById(req.params.id);
			if (status) {
				res.status(200).json({ message });
			} else {
				res.status(404).json({ message });
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
	handleDeleteMemberById: async (req, res) => {
		try {
			if (!req.params.id) {
				res.status(400);
			}
			const { status, message } = await userServices.deleteMemberById(req.params.id);
			if (status) {
				res.status(200).json({ message });
			} else {
				res.status(404).json({ message });
			}
		} catch (error) {
			res.status(400).json(error);
		}
	}
};
export default userController;
