import db from '../models/index';
import bcrypt from 'bcrypt';
import schema from '../helpers/validation';

const salt = bcrypt.genSaltSync(10);

const userServices = {
	createNewEmployee: async (data) => {
		new Promise(async (resolve, reject) => {
			try {
				const result = await schema.authSchema.validateAsync(data);
				let hashed = await bcrypt.hash(result.password, salt);
				let emailIsExist = await db.User.findOne({
					where: { email: result.email },
				});
				if (emailIsExist) {
					return resolve({
						status: false,
						statusMessage: 'Email was already exsit.',
					});
				}
				let newEmployee = await db.User.create({
					email: result.email,
					password: hashed,
					roleId: 2,
				});
				resolve({
					status: true,
					statusMessage: 'Create new employee successfully.',
					newUser: newEmployee.dataValues,
				});
			} catch (error) {
				reject(error);
			}
		});
	},
	deleteEmployeeById: async (id) => {
		new Promise(async (resolve, reject) => {
			try {
				const [isDelete] = await db.User.destroy({ where: { id: id } });
				if (isDelete) {
					resolve({
						status: true,
						statusMessage: 'Delete Employee Successfully',
					});
				} else {
					resolve({
						status: false,
						statusMessage: 'This Employee not found',
					});
				}
			} catch (error) {
				reject(error);
			}
		});
	},
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
