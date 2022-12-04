import db from '../models/index';
import bcrypt from 'bcrypt';
const salt = bcrypt.genSaltSync(10);
const userServices = {
	getAllUsers: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const users = await db.User.findAll({
					attributes: ['fullName', 'gender', 'email', 'imgLink', 'address', 'phoneNumber', 'dob', 'roleId'],
				});
				resolve({
					statusMessage: 'Get all users successfully!',
					usersList: users,
				});
			} catch (error) {
				reject(error);
			}
		});
	},
	getUserById: async (id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const user = await db.User.findOne({
					attributes: ['fullName', 'gender', 'email', 'imgLink', 'address', 'phoneNumber', 'dob', 'roleId'],
					where: {
						id: id,
					},
				});
				if (user == null) {
					resolve({
						status: false,
						statusMessage: 'This id not found!',
					});
				} else {
					resolve({
						status: true,
						statusMessage: 'Get user successfully!',
						user: user,
					});
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	updateUserById: async (id, data) => {
		return new Promise(async (resolve, reject) => {
			const user = await db.User.update(data, {
				where: {
					id: id,
				},
			});
			resolve(user);
		});
	},
};

export default userServices;
