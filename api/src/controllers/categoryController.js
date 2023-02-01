import categoryServices from '../services/categoryServices';

const categoryController = {
	handleCreateNewCategory: async (req, res) => {
		try {
			const { status, message } = await categoryServices.createNewCategory(req.body);
			if (status) {
				res.status(200).json({ message });
			} else res.status(400).json({ message });
		} catch (error) {
			res.status(400).json(error);
		}
	},
	handleGetAllCategories: async (req, res) => {
		try {
			const { status, message, categories } = await categoryServices.getAllCategories();
			if (status) {
				res.status(200).json({ message, data: categories });
			} else res.status(400).json({ message });
		} catch (error) {
			res.status(400).json(error);
		}
	},
	handleUpdateCategory: async (req, res) => {
		try {
			if (!req.params.categoryId) {
				res.status(400).json({ message: 'Not found' });
			}
			const { status, message } = await categoryServices.updateCategoryById(req.params.categoryId, req.body);
			if (status) {
				res.status(200).json({ message });
			} else res.status(400).json({ message });
		} catch (error) {
			res.status(400).json(error);
		}
	},
	handleDeleteCategory: async (req, res) => {
		try {
			if (!req.params.categoryId) {
				res.status(400).json({ message: 'Not found' });
            }
				const { status, message } = await categoryServices.deleteCategoryById(req.params.categoryId);
				if (status) {
					res.status(200).json({ message });
				} else res.status(400).json({ message });
			
		} catch (error) {
			res.status(400).json(error);
		}
	},
};

export default categoryController;
