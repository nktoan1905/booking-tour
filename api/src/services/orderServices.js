import db from '../models/index';

const orderServices = {
	createNewTransation: async (data, userId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isCreate = await db.Transaction.create({
					userId: userId,
					fullName: data.fullName,
					phoneNumber: data.phoneNumber,
					email: data.email,
					address: data.address,
					adultQty: data.adultQty,
					childQty: data.childQty,
					babyQty: data.babyQty,
					paymentInfo: data.paymentInfo,
					tourDepartureDayId: data.tourDepartureDayId,
				});
				if (isCreate) {
					resolve({ status: true, message: 'Create new transaction successfully!' });
				} else {
					resolve({
						status: false,
						message: 'Create failed',
					});
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllTransation: async () => {
		return new Promise(async (resolve, reject) => {
			try {
			} catch (error) {
				reject(error);
			}
		});
	},
	getTransationByUserId: async () => {
		return new Promise(async (resolve, reject) => {
			try {
			} catch (error) {
				reject(error);
			}
		});
	},
};
export default orderServices;
