import userServices from '../services/userServices';

const userController = {
	getAllUsers: async (req, res) => {
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
	getUserProfile: async (req, res) => {
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
	updateUserProfile: async (req, res) => {
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
