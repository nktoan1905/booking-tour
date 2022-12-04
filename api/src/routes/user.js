import express from 'express';
import userController from '../controllers/UserController';
import middlewareController from '../middleware/middlewareController';

const router = express.Router();

router.get('/:id', middlewareController.verifyTokenAndIsYour, userController.getUserProfile);
router.get('/', middlewareController.verifyTokenAndAdminAuth, userController.getAllUsers);
router.put('/:id', middlewareController.verifyTokenAndIsYour, userController.updateUserProfile);

// router.post('/:id', middlewareController.verifyTokenAndAdminAuth, userController.createUser);
// router.delete('/:id', middlewareController.verifyTokenAndAdminAuth, userController.deleteUserById);

export default router;
