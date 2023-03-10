import db from '../models';

const travelGuildeService = {
	createNewTravelGuilde: async (data, employeeId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const travelGuilde = await db.TravelGuilde.create({
					titile: data.titile,
					thumbnail: data.thumbnail,
					thumbnailName: data.thumbnailName,
					content: data.content,
					status: 0,
					createdBy: employeeId,
				});
				if (travelGuilde) {
					resolve({ status: true, message: 'Travel guild created successfully' });
				} else {
					resolve({ status: false, message: 'Travel guild created failed' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllTravelGuildes: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const travelGuildes = await db.TravelGuilde.findAll({
					include: { model: db.User, as: 'createdByUserInfo' },
					raw: true,
					nest: true,
				});
				if (travelGuildes.length > 0) {
					resolve({ status: true, message: 'Get all travel guilde successfully', travelGuildes });
				} else {
					resolve({ status: false, message: 'Not Found' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllTravelGuildesByStatus: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const travelGuildes = await db.TravelGuilde.findAll({
					where: { status: 1 },
					attributes: ['id', 'titile', 'thumbnail', 'thumbnailName', 'content', 'createdAt', 'updatedAt'],
					include: { model: db.User, as: 'createdByUserInfo', attributes: ['fullName'] },
					raw: true,
					nest: true,
				});
				if (travelGuildes.length > 0) {
					resolve({ status: true, message: 'Get all travel guilde successfully', travelGuildes });
				} else {
					resolve({ status: false, message: 'Not Found' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	updateTravelGuildeById: async (id, data) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isUpdate = await db.TravelGuilde.update(
					{
						titile: data.titile,
						thumbnail: data.thumbnail,
						thumbnailName: data.thumbnailName,
						content: data.content,
						updatedAt: new Date(),
					},
					{ where: { id: id } },
				);
				if (isUpdate) {
					resolve({ status: true, message: 'Update travel guilde successfully' });
				} else {
					resolve({ status: false, message: 'Update travel guilde failed' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	updateStatusOfTravelGuildeById: async (id, status) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isUpdate = await db.TravelGuilde.update(
					{
						status: status,
					},
					{ where: { id: id } },
				);
				if (isUpdate) {
					resolve({ status: true, message: 'Update travel guilde successfully' });
				} else {
					resolve({ status: false, message: 'Update travel guilde failed' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	deleteTravelGuildeById: async (id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isDestroy = await db.TravelGuilde.destroy({ where: { id: id } });
				if (isDestroy) {
					resolve({ status: true, message: 'Delete travel guilde successfully' });
				} else {
					resolve({ status: false, message: 'Delete travel guilde failed' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
};
