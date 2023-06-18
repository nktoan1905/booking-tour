import db from '../models';

const countryServices = {
	createNewCountry: async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				const country = await db.Country.findOne({ where: { name: data.name } });
				if (country) {
					resolve({ status: false, message: 'Country already exists.' });
				} else {
					await db.Country.create({ name: data.name, status: 1 });
					resolve({ status: true, message: 'Create new country successfully!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllCountryAndCity: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				let countries = await db.Country.findAll({
					attributes: ['id', 'name', 'status', 'createdAt'],
				});
				if (countries) {
					for (let i = 0; i < countries.length; i++) {
						let cities = await db.City.findAll({ where: { countryId: countries[i].id } });
						countries[i].cites = cities;
					}
				}

				resolve({ status: true, message: 'Get all countries successfully!', countries: countries });
			} catch (error) {
				reject(error);
			}
		});
	},
	updateCountryByCountryId: async (countryId, data) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isUpdate = await db.Country.update(
					{ name: data.name, status: data.status },
					{ where: { id: countryId } },
				);
				if (isUpdate) {
					resolve({ status: true, message: 'Update country successfully!' });
				} else {
					resolve({ status: false, message: 'Update country failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	deleteCountryByCountryId: async (countryId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isSet = await db.City.findAll({ where: { countryId: countryId } });
				if (isSet.length !== 0) {
					resolve({ status: false, message: 'Delete country failed!' });
				}
				const isDelete = await db.Country.destroy({ where: { id: countryId } });
				if (isDelete) {
					resolve({ status: true, message: 'Delete country successfully!' });
				} else {
					resolve({ status: false, message: 'Delete country failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
};
export default countryServices;
