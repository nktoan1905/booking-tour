import express from 'express';
import userController from '../controllers/UserController';
import middlewareController from '../middleware/middlewareController';
import tokenMiddleware from '../middleware/tokenMiddleware';

const router = express.Router();

router.get('/', tokenMiddleware.verifyToken, userController.handleGetUserProfile);

router.put('/', tokenMiddleware.verifyToken, userController.handleUpdateProfile);

export default router;
