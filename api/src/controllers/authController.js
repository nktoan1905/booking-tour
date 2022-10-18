import userServices from '../services/userServices';
import jwt from 'jsonwebtoken';

let refreshTokens = [];
const authController = {
	// Register
	registerUser: async (req, res) => {
		try {
			const { status, message, newUser } = await userServices.createNewUser(req.body);
			if (status === false) {
				res.status(400).json({
					message: message,
				});
			} else {
				res.status(200).json({
					newUser,
				});
			}
		} catch (error) {
			res.status(400).send(error);
		}
	},
	generateAccessToken: (user) => {
		return jwt.sign(
			{
				id: user.id,
				admin: user.isAdmin,
			},
			process.env.JWT_ACCESS_KEY,
			{
				expiresIn: '20d',
			},
		);
	},
	generateRefreshToken: (user) => {
		return jwt.sign(
			{
				id: user.id,
				admin: user.isAdmin,
			},
			process.env.JWT_REFRESH_KEY,
			{
				expiresIn: '365d',
			},
		);
	},
	login: async (req, res) => {
		try {
			const { status, message, user } = await userServices.loginUser(req.body);
			if (!status) {
				res.status(404).json(message);
			} else {
				const accessToken = authController.generateAccessToken(user);
				const refreshToken = authController.generateRefreshToken(user);
				refreshTokens.push(refreshToken);
				res.cookie('refreshToken', refreshToken, {
					httpOnly: true,
					secure: false,
					path: '/',
					sameSite: 'strict',
				});
				delete user.password;
				res.status(200).json({
					...user,
					accessToken,
				});
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
	refreshToken: async (req, res) => {
		// lấy refresh token từ user
		const refreshToken = req.cookies.refreshToken;
		if (!refreshToken) {
			return res.status(401).json("You're not authenticated");
		}
		if (!refreshTokens.includes(refreshToken)) {
			return res.status(403).json('Refresh token is not valid');
		}
		jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
			if (err) {
				return res.status(403).json('Refresh token is not valid');
			}
			// create new access token và refresh token
			refreshTokens = refreshTokens.filter((token) => {
				token !== refreshToken;
			});

			const newAccessToken = authController.generateAccessToken(user);
			const newRefreshToken = authController.generateRefreshToken(user);

			refreshTokens.push(newRefreshToken);
			res.cookie('refreshToken', newRefreshToken, {
				httpOnly: true,
				secure: false,
				path: '/',
				sameSite: 'strict',
			});
			res.status(200).json({
				newAccessToken: newAccessToken,
			});
		});
	},
	userLogout: async (req, res) => {
		res.clearCookie('refreshToken');
		refreshTokens = refreshTokens.filter((token) => token != req.cookies.refreshToken);
		res.status(200).json('Logout Succeed');
	},
};

export default authController;
