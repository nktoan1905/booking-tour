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
				const transactions = await db.Transaction.findAll({
					include: [
						{
							model: db.TourDepartureDay,
							attributes: ['id', 'dayStartId', 'tourId', 'startPlace'],
							include: [
								{
									model: db.Tour,
								},
							],
						},
						{
							model: db.User,
							attributes: ['id', 'fullName', 'gender', 'email', 'avatar', 'phoneNumber'],
						},
					],
					raw: true,
					nest: true,
				});
				resolve({ status: true, message: 'Get all orders successfully!', transactions });
			} catch (error) {
				reject(error);
			}
		});
	},
	getTransationByUserId: async (userId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const transactions = await db.Transaction.findAll({
					where: { userId: userId },
					include: [
						{
							model: db.TourDepartureDay,
							attributes: ['id', 'dayStartId', 'tourId', 'startPlace'],
							include: [
								{
									model: db.Tour,
								},
								{
									model: db.DepartureDay,
									attributes: ['dayStart'],
								},
							],
						},
					],
					raw: true,
					nest: true,
				});
				resolve({ status: true, message: 'Get all orders successfully', transactions });
			} catch (error) {
				reject(error);
			}
		});
	},
	getTheQuantityOrderedByTourDepartureDay: async (tourDepartureDayId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const transactions = await db.Transaction.findAll({
					where: {
						tourDepartureDayId: tourDepartureDayId,
					},
					include: [
						{
							model: db.TourDepartureDay,
							// include: [
							// 	{
							// 		model: db.Tour,
							// 	},
							// ],
						},
					],
					raw: true,
					nest: true,
				});
				var ordered = 0;
				transactions.forEach((element) => {
					ordered += element.adultQty + element.childQty + element.babyQty;
				});
				resolve({ status: true, message: 'asdasd', ordered });
			} catch (error) {
				reject(error);
			}
		});
	},
};
export default orderServices;
