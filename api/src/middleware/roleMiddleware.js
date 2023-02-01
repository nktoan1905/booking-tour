import UserRole from '../helpers/roleConst';
import tokenMiddleware from './tokenMiddleware';

const roleMiddleware = {
	verifyAdmin: function (req, res, next) {
		tokenMiddleware.verifyToken(req, res, () => {
			if (req.user.roleId === UserRole.ADMIN) {
				next();
			} else {
				res.status(403).json("You don't have permission to access!");
			}
		});
	},
	verifyEmployees: function (req, res, next) {
		if (req.user.roleId === UserRole.EMPLOYEE) {
			next();
		} else {
			res.status(403).json("You don't have permission to access!");
		}
	},
};
export default roleMiddleware;
