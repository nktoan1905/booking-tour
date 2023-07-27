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
					amountPaid: data.amountPaid,
					status: true,
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
					order: [['createdAt', 'DESC']],
					include: [
						{
							model: db.TourDepartureDay,
							attributes: ['id', 'dayStartId', 'tourId', 'startPlace'],
							include: [
								{
									model: db.Tour,
									as: 'tourInfo',
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
					order: [['createdAt', 'DESC']],
					include: [
						{
							model: db.TourDepartureDay,
							attributes: ['id', 'dayStartId', 'tourId', 'startPlace'],
							include: [
								{
									model: db.Tour,
									as: 'tourInfo',
								},
								{
									model: db.DepartureDay,
									attributes: ['dayStart'],
								},
							],
						},
					],
					raw: false,
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
						},
					],
					raw: true,
					nest: true,
				});
				var ordered = 0;
				transactions.forEach((element) => {
					if (element.status === 1) {
						ordered += element.adultQty + element.childQty + element.babyQty;
					}
				});
				resolve({ status: true, message: 'asdasd', ordered });
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllDepartureDayAndTransaction: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const orders = await db.TourDepartureDay.findAll({
					include: [
						{
							model: db.Transaction,
							as: 'transactions',
							include: [
								{
									model: db.User,
									attributes: ['id', 'fullName', 'email', 'avatar'],
								},
							],
						},
						{
							model: db.Tour,
							attributes: ['id', 'name', 'thumbnail', 'thumbnailName', 'duration', 'amount'],
							as: 'tourInfo',
						},
						{
							model: db.DepartureDay,
							attributes: ['id', 'dayStart'],
						},
					],
					nest: true,
					raw: false,
				});
				resolve({ orders });
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllTransationByDepartureDayId: async (departureDayId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const transactions = await db.TourDepartureDay.findOne({
					where: {
						id: departureDayId,
					},
					include: [
						{
							model: db.Transaction,
							as: 'transactions',
							include: [
								{
									model: db.User,
									attributes: ['id', 'fullName', 'email', 'avatar'],
								},
							],
						},
						{
							model: db.Tour,
							attributes: ['id', 'name', 'thumbnail', 'thumbnailName', 'duration', 'amount'],
							as: 'tourInfo',
						},
						{
							model: db.DepartureDay,
							attributes: ['id', 'dayStart'],
						},
					],
					nest: true,
					raw: false,
				});
				resolve({ status: true, message: 'Get all transaction successfully', transactions });
			} catch (error) {
				reject(error);
			}
		});
	},
	updateStatusTransaction: async (transactionId, status) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isUpdate = await db.Transaction.update(
					{
						status: status,
					},
					{
						where: {
							id: transactionId,
						},
					},
				);
				if (isUpdate) {
					resolve({ status: true, message: 'Update successfully' });
				} else {
					resolve({ status: false, message: 'Update failed' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
};
export default orderServices;
