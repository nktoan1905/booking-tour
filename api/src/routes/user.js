import express from 'express';
import tokenMiddleware from '../middleware/tokenMiddleware';
import userController from '../controllers/userController';

const router = express.Router();

router.get('/', tokenMiddleware.verifyToken, userController.handleGetUserProfile);

router.put('/', tokenMiddleware.verifyToken, userController.handleUpdateProfile);

router.put('/update-password', tokenMiddleware.verifyToken, userController.handleUpdatePassword);

export default router;
