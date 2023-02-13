import checkExist from '../helpers/checkExist';
import HttpSatusCode from '../helpers/httpStatusCode';

const checkIdExistMiddleware = {
	checkIdPromotionExist: async (req, res, next) => {},
	checkIdCountryExist: async (req, res, next) => {
		const isExist = await checkExist.checkCountryIdExist(req.params.countryId);
		if (isExist) {
			next();
		} else {
			res.status(HttpSatusCode.NOT_FOUND).json({ message: 'Id not found' });
		}
	},
};

export default checkIdExistMiddleware;
