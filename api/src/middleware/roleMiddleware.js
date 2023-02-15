import HttpSatusCode from '../helpers/httpStatusCode';
import UserRole from '../helpers/roleConst';
import tokenMiddleware from './tokenMiddleware';

const roleMiddleware = {
	verifyAdmin: async (req, res, next) => {
		await tokenMiddleware.verifyToken(req, res, () => {
			if (req.user.roleId === UserRole.ADMIN) {
				next();
			} else {
				res.status(403).json({ message: "You don't have permission to access!" });
			}
		});
	},
	verifyEmployees: async (req, res, next) => {
		await tokenMiddleware.verifyToken(req, res, () => {
			if (req.user.roleId === UserRole.EMPLOYEE) {
				next();
			} else {
				res.status(HttpSatusCode.FORBIDDEN).json({ message: "You don't have permission to access!" });
			}
		});
	},
	verifyAdminOrEmployee: async (req, res, next) => {
		await tokenMiddleware.verifyToken(req, res, () => {
			if (req.user.roleId === UserRole.EMPLOYEE || req.user.roleId === UserRole.ADMIN) {
				next();
			} else {
				res.status(HttpSatusCode.FORBIDDEN).json({ message: "You don't have permission to access!" });
			}
		});
	},
};
export default roleMiddleware;
