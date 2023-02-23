import db from '../models';

const cityServices = {
	createNewCity: async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				const city = await db.City.findOne({
					where: {
						name: data.name,
					},
				});
				const checkCountryId = await db.Country.findOne({ where: { id: data.countryId } });
				if (city) {
					resolve({
						status: false,
						message: 'City already exists.',
					});
				} else {
					if (checkCountryId) {
						await db.City.create({ name: data.name, status: 1, countryId: data.countryId });
						resolve({
							status: true,
							message: 'Create city successfully.',
						});
					} else {
						resolve({
							status: false,
							message: 'Country not found',
						});
					}
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllCity: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				let cities = await db.City.findAll({
					attributes: ['name', 'status'],
					include: [
						{
							model: db.Country,
							as: 'countryInfo',
							attributes: ['name', 'status'],
						},
					],
					nest: true,
					raw: true,
				});
				if (cities.length > 0) {
					resolve({ status: true, message: 'Get all cities successfully!', cities: cities });
				} else {
					resolve({ status: false, message: 'Get all cities failed!' });
				}
			} catch (error) {
				console.log(error);
				reject(error);
			}
		});
	},
	updateCity: async (cityId, data) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isUpdate = await db.City.update({ name: data.name, status: data.status }, { where: { id: cityId } });
				if (isUpdate) {
					resolve({ status: true, message: 'Update city was successful.' });
				} else {
					resolve({ status: false, message: 'Update city failed.' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	deleteCity: async (cityId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isDelete = await db.City.destroy({ where: { id: cityId } });
				if (isDelete) {
					resolve({ status: true, message: 'City deleted successfully' });
				} else {
					resolve({ status: false, message: 'Delete failed' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
};
export default cityServices;
