import userServices from '../services/userServices';

const userController = {
	getAllUsers: async (req, res) => {
		try {
			const { status, users } = await userServices.getAllUsers();
			res.status(200).json(users);
		} catch (error) {
			res.status(500).json(error);
		}
	},
	createUser: async (req, res) => {
		try {
			const { status, users } = await userServices.createUser();
			res.status(200).json(users);
		} catch (error) {
			res.status(500).json(error);
		}
	},
	deleteUserById: async (req, res) => {
		try {
			const id = req.params.id;
			const { status, message } = await userServices.deleteUserById(id);
			if (!status) {
				return res.status(404).json(message);
			} else {
				return res.status(200).json(message);
			}
		} catch (error) {
			res.status(500).json(error);
		}
	},
	getUsersById: async (req, res) => {
		try {
			const id = req.params.id;
			const { status, user } = await userServices.getUserById(id);
		} catch (error) {}
	}
};
export default userController;
