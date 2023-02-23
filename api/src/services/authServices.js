import db from '../models/index';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserRole from '../helpers/roleConst';
import Status from '../helpers/statusConst';

const salt = bcrypt.genSaltSync(10);

const authServices = {
	createNewUser: async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				let hashed = await bcrypt.hash(data.password, salt);
				let emailIsExist = await db.User.findOne({
					where: { email: data.email },
				});
				if (emailIsExist) {
					return resolve({
						status: false,
						message: 'Email was already exsit.',
					});
				}
				let newUser = await db.User.create({
					email: data.email,
					fullName: data.fullName,
					password: hashed,
					roleId: UserRole.MEMBERS,
					status: Status.ACTIVE,
				});
				resolve({
					status: true,
					message: 'Create new user successfully.',
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
						message: 'Wrong Email!',
					});
				}
				let validPassword = await bcrypt.compare(data.password, user.password);
				if (!validPassword) {
					resolve({
						status: false,
						message: 'Wrong password!',
					});
				}
				delete user?.password;
				if (user && validPassword && user.status === Status.ACTIVE) {
					resolve({
						status: true,
						message: 'Login successfully',
						user,
					});
				} else {
					resolve({
						status: false,
						message: 'Account was been deleted',
					});
				}
			} catch (error) {
				reject(error);
			}
		});
	},
};

export default authServices;
