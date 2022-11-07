import express from 'express';
import userController from '../controllers/UserController';
import middlewareController from '../middleware/middlewareController';

const router = express.Router();


router.get('/', middlewareController.verifyToken, userController.getUsersById);
router.get('/', middlewareController.verifyTokenAndAdminAuth, userController.getAllUsers);
router.post('/:id', middlewareController.verifyTokenAndAdminAuth, userController.createUser);
router.delete('/:id', middlewareController.verifyTokenAndAdminAuth, userController.deleteUserById);

export default router;
