import db from '../models/index';
import bcrypt from 'bcrypt';
import schema from '../helpers/validation';
import jwt from 'jsonwebtoken';

const salt = bcrypt.genSaltSync(10);

const authServices = {
	createNewUser: async (data) => {
		return new Promise(async (resolve, reject) => {
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
				let newUser = await db.User.create({
					email: result.email,
					password: hashed,
				});
				resolve({
					status: true,
					statusMessage: 'Create new user successfully.',
					newUser: newUser.dataValues,
				});
			} catch (error) {
				reject(error);
			}
		});
	},
	generateAccessToken: (user) => {
		return jwt.sign(
			{
				id: user.id,
				roleId: user.roleId,
			},
			process.env.JWT_ACCESS_KEY,
			{
				expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
			},
		);
	},
	generateRefreshToken: (user) => {
		return jwt.sign(
			{
				id: user.id,
				roleId: user.roleId,
			},
			process.env.JWT_REFRESH_KEY,
			{
				expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
			},
		);
	},
	findUserbyEmail: (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				let user = await db.User.findOne({
					where: { email: data.email },
				});
				if (user == null) {
					resolve({
						status: false,
						statusMessage: 'Wrong Email!',
					});
				}
				let validPassword = await bcrypt.compare(data.password, user.password);
				if (!validPassword) {
					resolve({
						status: false,
						statusMessage: 'Wrong password!',
					});
				}
				delete user?.password;
				if (user && validPassword) {
					resolve({
						status: true,
						statusMessage: 'Login successfully',
						user,
					});
				}
			} catch (error) {
				reject(error);
			}
		});
	},
};

export default authServices;
