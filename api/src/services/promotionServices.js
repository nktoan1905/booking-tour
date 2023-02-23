import UserRole from '../helpers/roleConst';
import Status from '../helpers/statusConst';
import db from '../models';

const promotionServices = {
	createNewPromotion: async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				/**
				 * Admin 20%
				 *
				 */
				let newPromotion = await db.Promotion.create({
					name: data.name,
					promotion: data.promotion,
					status: Status.ACTIVE,
					forObject: data.forObject || UserRole.MEMBERS,
				});
				if (newPromotion) {
					resolve({ status: true, message: 'Create new promotion successfully!' });
				} else {
					resolve({ status: false, message: 'Create promotion failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllPromotions: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				let promotions = await db.Promotion.findAll({ atributes: ['id', 'name', 'promotion', 'status'] });
				if (promotion.length <= 0) {
					resolve({ status: false, message: 'Get all promotions failed!' });
				} else {
					resolve({ status: true, message: 'Get all promotions successfully!', promotions: promotions });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	updatePromotionById: async (id, data) => {
		return new Promise(async (resolve, reject) => {
			try {
				let isUpdate = await db.Promotion.update(
					{
						name: data.name,
						status: data.status,
						forObject: data.forObject,
						promotion: data.promotion,
						updatedAt: new Date(),
					},
					{ where: { id: id } },
				);
				if (isUpdate) {
					resolve({ status: true, message: 'Update promotion successfully!' });
				} else {
					resolve({ status: false, message: 'Update promotion failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	deletePromotionById: async (id) => {
		return new Promise(async (resolve, reject) => {
			try {
				let isDelete = await db.Promotion.destroy({ where: { id: id } });
				if (isDelete) {
					resolve({ status: false, message: 'Delete promotion successfully!' });
				} else {
					resolve({ status: false, message: 'Delete promotion failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
};
export default promotionServices;
