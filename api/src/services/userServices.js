import db from '../models/index';
import jwt from 'jsonwebtoken';
import { hashUserPassword, comparePassword } from '../helpers/hashUserPassword';
import { registerValidation, loginValidation } from '../helpers/validation';
let createNewUser = async (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			let hashPassword = await hashUserPassword(data.password);
			// check validate
			const { error } = registerValidation(data);
			if (error)
				return resolve({
					status: false,
					message: error.details[0].message,
				});
			// check email is exist
			let emailExist = await db.User.findOne({
				where: { email: data.email },
			});
			if (emailExist)
				return resolve({
					status: false,
					message: 'Email was already exist.',
				});
			//
			let newUser = await db.User.create({
				fullName: data.fullName,
				email: data.email,
				password: hashPassword,
			});

			resolve({
				status: true,
				message: newUser,
			});
		} catch (error) {
			reject(error);
		}
	});
};

let userLogin = async (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			// checking form validation
			const { error } = loginValidation(data);
			if (error)
				resolve({
					status: false,
					message: error.details[0].message,
				});

			// checking if email exists
			let user = await db.User.findOne({
				where: { email: data.email },
				raw: true,
			});
			if (!user)
				resolve({
					status: false,
					message: 'Email is not found',
				});
			// Password is correct
			const validPass = await comparePassword(data.password, user.password);

			if (!validPass)
				resolve({
					status: false,
					message: 'Invalid Password',
				});
			resolve({
				status: true,
				message: 'Login Succeed',
				userId: user.id
			});
		} catch (error) {
			reject(error);
		}
	});
};
module.exports = {
	createNewUser: createNewUser,
	userLogin: userLogin,
};
