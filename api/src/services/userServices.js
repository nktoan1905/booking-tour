import db from '../models/index';
import bcrypt from 'bcrypt';
const salt = bcrypt.genSaltSync(10);
const userServices = {
	createNewUser: async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				console.log(data);
				let hashed = await bcrypt.hash(data.password, salt);
				// check email is exist
				let emailExist = await db.User.findOne({
					where: { email: data.email },
				});
				if (emailExist) {
					return resolve({
						status: false,
						message: 'Email was already exsit.',
					});
				}
				let newUser = await db.User.create({
					email: data.email,
					password: hashed,
					fullName: data.fullName,
					gender: data.gender,
				});
				resolve({
					status: true,
					newUser: newUser,
				});
			} catch (error) {
				reject(error);
			}
		});
	},
	createUser: async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				console.log(data);
				let hashed = await bcrypt.hash(data.password, salt);
				// check email is exist
				let emailExist = await db.User.findOne({
					where: { email: data.email },
				});
				if (emailExist) {
					return resolve({
						status: false,
						message: 'Email was already exsit.',
					});
				}
				let newUser = await db.User.create({
					email: data.email,
					password: hashed,
					fullName: data.fullName,
					gender: data.gender,
					isAdmin: data.isAdmin,
				});
				resolve({
					status: true,
					newUser: newUser,
				});
			} catch (error) {
				reject(error);
			}
		});
	},
	loginUser: async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				let user = await db.User.findOne({
					where: { username: data.username },
					raw: true,
				});
				if (user == null) {
					resolve({
						status: false,
						message: 'Wrong username!',
					});
				}
				let validPassword = await bcrypt.compare(data.password, user.password);
				if (!validPassword) {
					resolve({
						status: false,
						message: 'Wrong password!',
					});
				}
				if (user && validPassword) {
					resolve({
						status: true,
						user,
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
				const users = await db.User.findAll();
				resolve({
					status: true,
					users,
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
					where: { id: id },
					raw: true,
				});
				if (user)
					resolve({
						status: true,
						
					});
				resolve({
					status: true,
					user,
				});
			} catch (error) {
				reject(error);
			}
		});
	},
	deleteUserById: async (id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const user = await db.User.findOne({
					where: { id: id },
				});
				if (user == null) {
					resolve({
						status: false,
						message: "Username can't found",
					});
				} else {
					await user.destroy();
					resolve({
						status: true,
						message: 'Delete successfully',
					});
				}
			} catch (error) {
				reject(error);
			}
		});
	},
};

export default userServices;
