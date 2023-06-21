import HttpStatusCode from '../helpers/httpStatusCode';
import categoryServices from '../services/categoryServices';

const categoryController = {
	handleCreateNewCategory: async (req, res) => {
		try {
			const { status, message } = await categoryServices.createNewCategory(req.body);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else res.status(HttpStatusCode.BAD_REQUEST).json({ message });
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleGetAllCategories: async (req, res) => {
		try {
			const { status, message, categories } = await categoryServices.getAllCategories();
			if (status) {
				res.status(HttpStatusCode.OK).json({ message, data: categories });
			} else res.status(HttpStatusCode.BAD_REQUEST).json({ message });
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleUpdateCategory: async (req, res) => {
		try {
			if (!req.params.categoryId) {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message: 'Not found' });
			}
			const { status, message } = await categoryServices.updateCategoryById(req.params.categoryId, req.body);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else res.status(HttpStatusCode.BAD_REQUEST).json({ message });
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleDeleteCategory: async (req, res) => {
		try {
			const { status, message } = await categoryServices.deleteCategoryById(req.params.categoryId);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else res.status(HttpStatusCode.BAD_REQUEST).json({ message });
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
};

export default categoryController;
