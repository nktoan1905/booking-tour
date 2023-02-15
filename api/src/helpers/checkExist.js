import db from '../models';

const checkExist = {
	checkPromotonIdExist: async (promotionId) => {
		const promotion = await db.Promotion.findOne({
			where: { id: promotionId },
		});
		if (promotion) {
			return 1;
		} else {
			return 0;
		}
	},
	checkCategoryIdExist: async (categoryId) => {
		const category = await db.Category.findOne({ where: { id: categoryId } });
		if (category) {
			return 1;
		} else {
			return 0;
		}
	},
	checkNewsIdExist: async (newsId) => {
		const news = await db.New.findOne({ where: { id: newsId } });
		if (news) {
			return 1;
		} else {
			return 0;
		}
	},
	checkTourIdExist: async () => {},
	checkCountryIdExist: async (countryId) => {
		const country = await db.Country.findOne({ where: { id: countryId } });
		if (country) {
			return 1;
		} else {
			return 0;
		}
	},
	checkCityIdExist: async (countryId) => {
		const city = await db.Country.findOne({ where: { id: countryId } });
		if (city) {
			return 1;
		} else {
			return 0;
		}
	},
	checkContactIdExist: async (contactId) => {
		const contact = await db.Contact.findOne({ where: { id: contactId } });
		if (contact) {
			return 1;
		} else {
			return 0;
		}
	},
	checkDepartureDayIdExist: async (departureDayId) => {
		const departureDay = await db.DepartureDay.findOne({ where: { id: departureDayId } });
		if (departureDay) {
			return 1;
		} else {
			return 0;
		}
	},
};
export default checkExist;
