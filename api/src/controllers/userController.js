import userServices from '../services/userServices';

const userController = {
	handleCreateNewEmployee: async (req, res) => {
		try {
			const { status, statusMessage, newEmployee } = await userServices.createNewEmployee(req.body);
			delete newEmployee?.password;
			if (status) {
				res.status(200).json({
					status: statusMessage,
					data: newEmployee,
				});
			} else {
				res.status(400).json({
					status: statusMessage,
				});
			}
		} catch (error) {
			res.status(400).send(error);
		}
	},
	handleDeleteEmployeeById: async (req, res) => {
		try {
			const { status, statusMessage } = await userServices.deleteEmployeeById(req.id);
			if (status) {
				res.status(200).json({
					status: statusMessage,
				});
			} else {
				res.status(404).json({
					status: statusMessage,
				});
			}
		} catch (error) {
			res.status(400).send(error);
		}
	},
	handleGetAllUsers: async (req, res) => {
		try {
			const { statusMessage, usersList } = await userServices.getAllUsers();
			res.status(200).json({
				status: statusMessage,
				data: usersList,
			});
		} catch (error) {
			res.status(400).send(error);
		}
	},
	handleGetUserProfile: async (req, res) => {
		try {
			const id = req.params.id;
			const { status, statusMessage, user } = await userServices.getUserById(id);
			console.log(user);
			if (status) {
				res.status(200).json({
					status: statusMessage,
					data: user,
				});
			} else {
				res.status(404).json({
					status: statusMessage,
				});
			}
		} catch (error) {
			res.status(400).send(error);
		}
	},
	hanleUpdateUserProfile: async (req, res) => {
		try {
			const [isUpdate] = await userServices.updateUserById(req.user.id, req.body);
			if (isUpdate) {
				res.status(200).json({
					status: 'Update user successfully!',
				});
			} else {
				res.status(404).json({
					status: 'User not found.',
				});
			}
		} catch (error) {
			res.status(400).send(error);
		}
	},
};
export default userController;
