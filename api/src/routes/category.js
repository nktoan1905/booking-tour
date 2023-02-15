import express from 'express';
import categoryController from '../controllers/categoryController';
import checkIdExistMiddleware from '../middleware/checkExistMiddleware';
import roleMiddleware from '../middleware/roleMiddleware';

const router = express.Router();

// register
router.post('/register', roleMiddleware.verifyAdminOrEmployee, categoryController.handleCreateNewCategory);

router.get('/', roleMiddleware.verifyAdminOrEmployee, categoryController.handleGetAllCategories);

router.put(
	'/:categoryId',
	checkIdExistMiddleware.checkIdCategoryExist,
	roleMiddleware.verifyAdminOrEmployee,
	categoryController.handleUpdateCategory,
);

router.delete(
	'/:categoryId',
	checkIdExistMiddleware.checkIdCategoryExist,
	roleMiddleware.verifyAdmin,
	categoryController.handleDeleteCategory,
);

export default router;
