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
					resolve({ status: true, message: 'Create new country sucessfully!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllCountryAndCity: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const countries = await db.Country.findAll({
					attributes: ['id', 'name', 'status'],
				});

				if (countries) {
					resolve({ status: true, messaage: 'Get all countries sucessfully!', countries: countries });
				} else {
					resolve({ status: false, messaage: 'Get all countries failed!' });
				}
			} catch (error) {
				console.log(error);
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
