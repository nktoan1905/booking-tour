import jwt from 'jsonwebtoken';
import HttpSatusCode from '../helpers/httpStatusCode';
import db from '../models';

const tokenMiddleware = {
	verifyToken: async (req, res, next) => {
		const token = req.headers.token;
		if (token) {
			const accessToken = token.split(' ')[1];
			jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, async (err, user) => {
				if (err) {
					return res.status(HttpSatusCode.FORBIDDEN).json({ message: 'Token is not valid' });
				}
				const userDB = await db.User.findOne({ where: { id: user.id } });
				if (userDB.status === 1) {
					req.user = user;
					next();
				} else {
					return res
						.status(HttpSatusCode.NOT_ACCEPTABLE)
						.json({ message: 'This account has been delete. Please contact with us' });
				}
			});
		} else {
			return res.status(HttpSatusCode.UNAUTHORIIZED).json({ message: "You're not authenticated" });
		}
	},
};
export default tokenMiddleware;
