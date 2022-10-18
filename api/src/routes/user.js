import express from 'express';
import userController from '../controllers/UserController';
import middlewareController from '../middleware/middlewareController';

const router = express.Router();

router.get('/', middlewareController.verifyToken, userController.getAllUsers);
router.delete('/:id', middlewareController.verifyTokenAndAdminAuth, userController.deleteUserById);

export default router;
