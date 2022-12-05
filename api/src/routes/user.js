import express from 'express';
import userController from '../controllers/UserController';
import middlewareController from '../middleware/middlewareController';

const router = express.Router();

router.get('/:id', middlewareController.verifyTokenAndIsYour, userController.getUserProfile);

router.put('/:id', middlewareController.verifyTokenAndIsYour, userController.updateUserProfile);

export default router;
