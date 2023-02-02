import Status from '../helpers/statusConst';
import db from '../models';

const categoryServices = {
	createNewCategory: async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				let newCategory = await db.Category.create({ name: data.name, status: Status.ACTIVE });
				if (newCategory) {
					resolve({ status: true, message: 'Create new category successfully!' });
				} else {
					resolve({ status: false, message: 'Create category failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllCategories: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				let categories = await db.Category.findAll({ atributes: ['id', 'name', 'status'] });
				if (!categories) {
					resolve({ status: false, message: 'Get all categories failed!' });
				} else {
					resolve({ status: true, message: 'Get all categories successfully!', categories: categories });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	updateCategoryById: async (id, data) => {
		return new Promise(async (resolve, reject) => {
			try {
				let isUpdate = await db.Category.update({ name: data.name, status: data.status }, { where: { id: id } });
				if (isUpdate) {
					resolve({ status: true, message: 'Update category successfully!' });
				} else {
					resolve({ status: false, message: 'Update category failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	deleteCategoryById: async (id) => {
		return new Promise(async (resolve, reject) => {
			try {
				let isDelete = await db.Category.destroy({ where: { id: id } });
				if (isDelete) {
					resolve({ status: false, message: 'Delete category successfully!' });
				} else {
					resolve({ status: false, message: 'Delete category failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
};
export default categoryServices;
