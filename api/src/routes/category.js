import express from 'express';
import categoryController from '../controllers/categoryController';

const router = express.Router();

// register
router.post('/register', categoryController.handleCreateNewCategory);

router.get('/', categoryController.handleGetAllCategories);

router.put('/:categoryId', categoryController.handleUpdateCategory);

router.delete('/:categoryId', categoryController.handleDeleteCategory);

export default router;
