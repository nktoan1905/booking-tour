import express from 'express';
import categoryController from '../controllers/categoryController';
import roleMiddleware from '../middleware/roleMiddleware';

const router = express.Router();

// register
router.post('/register', roleMiddleware.verifyEmployees, categoryController.handleCreateNewCategory);

router.get('/', roleMiddleware.verifyEmployees, categoryController.handleGetAllCategories);

router.put('/:categoryId', roleMiddleware.verifyEmployees, categoryController.handleUpdateCategory);

router.delete('/:categoryId', roleMiddleware.verifyEmployees, categoryController.handleDeleteCategory);

export default router;
