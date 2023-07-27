import authServices from '../services/authServices';
import jwt from 'jsonwebtoken';
import db from '../models';
import HttpStatusCode from '../helpers/httpStatusCode';
import userServices from '../services/userServices';
import generator from 'generate-password';
import sendMail from '../services/mailServices';
import bcrypt from 'bcrypt';
const salt = bcrypt.genSaltSync(10);

const authController = {
	handleRegisterUser: async (req, res) => {
		try {
			const { status, message, newUser } = await authServices.createNewUser(req.body);
			delete newUser?.password;
			delete newUser?.updatedAt;
			delete newUser?.createdAt;

			if (status) {
				res.status(HttpStatusCode.OK).json({
					message: message,
					data: newUser,
				});
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({
					message: message,
				});
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleLogin: async (req, res) => {
		try {
			const { status, message, user } = await authServices.findUserbyEmail(req.body);
			if (!status) {
				res.status(404).json(message);
			} else {
				const accessToken = authServices.generateAccessToken(user);
				const refreshToken = authServices.generateRefreshToken(user);

				await db.RefreshToken.create({
					token: refreshToken,
				});

				res.cookie('refreshToken', refreshToken, {
					httpOnly: true,
				});
				res.status(HttpStatusCode.OK).json({
					message: message,
					data: {
						accessToken: accessToken,
						user: user,
					},
				});
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleRefreshToken: async (req, res) => {
		const refreshToken = req.cookies.refreshToken;
		if (!refreshToken) {
			return res.status(HttpStatusCode.UNAUTHORIIZED).json("You're not authenticated");
		}
		const refreshTokenExist = await db.RefreshToken.findOne({
			where: { token: refreshToken },
		});
		if (refreshTokenExist == null) {
			return res.status(403).json('Refresh token is not valid');
		}
		jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, async (err, user) => {
			if (err) {
				return res.status(403).json('Refresh token is not valid');
			}
			await db.RefreshToken.destroy({ where: { token: refreshToken } });
			const newAccessToken = authServices.generateAccessToken(user);
			const newRefreshToken = authServices.generateRefreshToken(user);
			await db.RefreshToken.create({
				refresh_token: newRefreshToken,
			});
			res.cookie('refreshToken', newRefreshToken, {
				httpOnly: true,
				secure: false,
				path: '/',
				sameSite: 'strict',
			});
			res.status(HttpStatusCode.OK).json({
				message: 'Refresh token successfully!',
				data: {
					newAccessToken: newAccessToken,
				},
			});
		});
	},
	handleLogout: async (req, res) => {
		try {
			res.clearCookie('refreshToken');
			console.log(req.cookies.refreshToken)
			await db.RefreshToken.destroy({
				where: {
					token: req.cookies.refreshToken,
				},
			});
			res.status(HttpStatusCode.OK).json({ message: 'Logout successfully!' });
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleForgotPassword: async (req, res) => {
		try {
			const { status, message, user } = await userServices.findUserByEmail(req.body.email);
			if (status) {
				const password = generator.generate({
					length: 10,
					numbers: true,
				});
				let hashed = await bcrypt.hash(password, salt);

				await db.User.update({ password: hashed }, { where: { id: user.id } });
				await sendMail(
					{
						subject: 'Reset password',
						body: `<h4>New password: ${password}</h4>`,
					},
					req.body.email,
				);
				res.status(HttpStatusCode.OK).json({ message: 'Reset password successfully!' });
			} else {
				res.status(HttpStatusCode.NOT_FOUND).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
};

export default authController;
