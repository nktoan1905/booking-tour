import checkExist from '../helpers/checkExist';
import HttpStatusCode from '../helpers/httpStatusCode';

const checkIdExistMiddleware = {
	checkIdPromotionExist: async (req, res, next) => {
		const isExist = await checkExist.checkPromotonIdExist(req.params.promotionId);
		if (isExist) {
			next();
		} else {
			res.status(HttpStatusCode.NOT_FOUND).json({ message: 'Id not found' });
		}
	},
	checkIdCountryExist: async (req, res, next) => {
		const isExist = await checkExist.checkCountryIdExist(req.params.countryId);
		if (isExist) {
			next();
		} else {
			res.status(HttpStatusCode.NOT_FOUND).json({ message: 'Id not found' });
		}
	},
	checkIdCityExist: async (req, res, next) => {
		const isExist = await checkExist.checkCityIdExist(req.params.cityId);
		if (isExist) {
			next();
		} else {
			res.status(HttpStatusCode.NOT_FOUND).json({ message: 'Id not found' });
		}
	},
	checkIdCategoryExist: async (req, res, next) => {
		const isExist = await checkExist.checkCategoryIdExist(req.params.categoryId);
		if (isExist) {
			next();
		} else {
			res.status(HttpStatusCode.NOT_FOUND).json({ message: 'Id not found' });
		}
	},
	checkIdNewsExist: async (req, res, next) => {
		const isExist = await checkExist.checkNewsIdExist(req.params.newsId);
		if (isExist) {
			next();
		} else {
			res.status(HttpStatusCode.NOT_FOUND).json({ message: 'Id not found' });
		}
	},
	checkIdContactExist: async (req, res, next) => {
		const isExist = await checkExist.checkContactIdExist(req.params.contactId);
		if (isExist) {
			next();
		} else {
			res.status(HttpStatusCode.NOT_FOUND).json({ message: 'Id not found' });
		}
	},
	checkIdDepartureDayExist: async (req, res, next) => {
		const isExist = await checkExist.checkDepartureDayIdExist(req.params.departureDayId);
		if (isExist) {
			next();
		} else {
			res.status(HttpStatusCode.NOT_FOUND).json({ message: 'Id not found' });
		}
	},
	checkIdTourExist: async (req, res, next) => {
		const isExist = await checkExist.checkTourIdExist(req.params.tourId);
		if (isExist) {
			next();
		} else {
			res.status(HttpStatusCode.NOT_FOUND).json({ message: 'Id not found' });
		}
	},
};

export default checkIdExistMiddleware;
