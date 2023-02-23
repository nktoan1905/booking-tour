import db from '../models/index';

const departureDayServices = {
	createNewDepartureDay: async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				const departureDay = await db.DepartureDay.findOne({ where: { dayStart: data.dayStart } });
				if (departureDay) {
					resolve({ status: false, message: 'Departure Day already exists.' });
				} else {
					await db.DepartureDay.create({
						dayStart: data.dayStart,
						status: 1,
					});
					resolve({ status: true, message: 'Create new departure Day successfully.' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllDepartureDay: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const departureDays = await db.DepartureDay.findAll({
					attributes: ['id', 'dayStart', 'status'],
				});
				if (departureDays.length > 0) {
					resolve({ status: true, message: 'Get all Departure day successfully!' , departureDays});
				} else {
					resolve({ status: false, message: 'Get all Departure day failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	updateDayStartInDepartureDay: async (departureDayId, data) => {
		return new Promise(async (resolve, reject) => {
			try {
				const checkDayStartExist = await db.DepartureDay.findOne({ where: { dayStart: data.dayStart } });
				if (checkDayStartExist) {
					resolve({ status: false, message: 'Day start already exist!' });
				} else {
					const isUpdate = await db.DepartureDay.update({ dayStart: data.dayStart }, { where: { id: departureDayId } });
					if (isUpdate) {
						resolve({ status: true, message: 'Update successful!' });
					} else {
						resolve({ status: false, message: 'Update failed!' });
					}
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	updateStatusInDepartureDay: async (departureDayId, data) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isUpdate = await db.DepartureDay.update({ status: data.status }, { where: { id: departureDayId } });
				if (isUpdate) {
					resolve({ status: true, message: 'Update successfully!' });
				} else {
					resolve({ status: false, message: 'Update failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	deleteDepartureDay: async (departureDayId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isDelete = await db.DepartureDay.destroy({ where: { id: departureDayId } });
				if (isDelete) {
					resolve({ status: true, message: 'Delete successful!' });
				} else {
					resolve({ status: false, message: 'Delete failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
};
export default departureDayServices;
