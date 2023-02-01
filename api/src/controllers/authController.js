import authServices from '../services/authServices';
import jwt from 'jsonwebtoken';
import db from '../models';

const authController = {
	handleRegisterUser: async (req, res) => {
		try {
			const { status, statusMessage, newUser } = await authServices.createNewUser(req.body);
			delete newUser?.password;
			delete newUser?.updatedAt;
			delete newUser?.createdAt;

			if (status) {
				res.status(200).json({
					status: statusMessage,
					data: newUser,
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
	handleLogin: async (req, res) => {
		try {
			const { status, statusMessage, user } = await authServices.findUserbyEmail(req.body);
			if (!status) {
				res.status(404).json(statusMessage);
			} else {
				const accessToken = authServices.generateAccessToken(user);
				const refreshToken = authServices.generateRefreshToken(user);

				await db.RefreshToken.create({
					token: refreshToken,
				});

				res.cookie('refreshToken', refreshToken, {
					httpOnly: true,
					secure: false,
					path: '/',
					sameSite: 'strict',
				});
				res.status(200).json({
					status: statusMessage,
					data: {
						accessToken,
					},
				});
			}
		} catch (error) {
			res.status(400).send(error);
		}
	},
	handleRefreshToken: async (req, res) => {
		const refreshToken = req.cookies.refreshToken;
		if (!refreshToken) {
			return res.status(401).json("You're not authenticated");
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
			res.status(200).json({
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
			await db.RefreshToken.destroy({
				where: {
					token: req.cookies.refreshToken,
				},
			});
			res.status(200).json({ message: 'Logout successfully!' });
		} catch (error) {
			res.status(400).send(error);
		}
	},
};

export default authController;
