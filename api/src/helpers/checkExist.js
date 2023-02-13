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
	checkNewsIdExist: async () => {},
	checkTourIdExist: async () => {},
	checkCountryIdExist: async (countryId) => {
		const country = await db.Country.findOne({ where: { id: countryId } });
		if (country) {
			return 1;
		} else {
			return 0;
		}
	},
};
export default checkExist;
