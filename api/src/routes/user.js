import express from 'express';
import tokenMiddleware from '../middleware/tokenMiddleware';
import userController from '../controllers/userController';

const router = express.Router();

router.get('/', tokenMiddleware.verifyToken, userController.handleGetUserProfile);

router.put('/', tokenMiddleware.verifyToken, userController.handleUpdateProfile);

router.put('/update-password', tokenMiddleware.verifyToken, userController.handleUpdatePassword);

router.get('/flowing-tour', tokenMiddleware.verifyToken, userController.handleGetAllTourIdIsFlowingByUserId);

router.post('/create-flowing', tokenMiddleware.verifyToken, userController.handleAddNewFlowingTourByTourId);

router.delete('/delete-flowing', tokenMiddleware.verifyToken, userController.handleDeleteFlowingTourByTourId);

export default router;
