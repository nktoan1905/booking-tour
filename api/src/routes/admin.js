import express from 'express';
import userController from '../controllers/UserController';
import middlewareController from '../middleware/middlewareController';
const router = express.Router();

router.get('/', middlewareController.verifyTokenAndAdminAuth, userController.getAllUsers);
router.post('/:id', middlewareController.verifyTokenAndAdminAuth, userController.createNewEmployee);
router.delete('/:id', middlewareController.verifyTokenAndAdminAuth, userController.deleteEmployeeById);

export default router;
