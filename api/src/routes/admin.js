import express from 'express';
import userController from '../controllers/UserController';
import middlewareController from '../middleware/middlewareController';
import roleMiddleware from '../middleware/roleMiddleware';
const router = express.Router();

// get all users của website
router.get('/', roleMiddleware.verifyAdmin, userController.handleGetAllUsers);

// Tạo mới nhân viên website
router.post('/:id', roleMiddleware.verifyAdmin, userController.handleCreateNewEmployee);

// Xóa nhân viên website
router.delete('/:id', roleMiddleware.verifyAdmin, userController.handleDeleteEmployeeById);

export default router;
