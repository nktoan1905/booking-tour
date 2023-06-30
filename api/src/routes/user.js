import express from 'express';
import tokenMiddleware from '../middleware/tokenMiddleware';
import userController from '../controllers/userController';
import orderController from '../controllers/orderController';

const router = express.Router();

router.get('/', tokenMiddleware.verifyToken, userController.handleGetUserProfile);

router.put('/', tokenMiddleware.verifyToken, userController.handleUpdateProfile);

router.put('/update-password', tokenMiddleware.verifyToken, userController.handleUpdatePassword);

router.get('/flowing-tour', tokenMiddleware.verifyToken, userController.handleGetAllTourIdIsFlowingByUserId);

router.post('/create-flowing', tokenMiddleware.verifyToken, userController.handleAddNewFlowingTourByTourId);

router.delete('/delete-flowing', tokenMiddleware.verifyToken, userController.handleDeleteFlowingTourByTourId);

router.get('/orders', tokenMiddleware.verifyToken, orderController.getUserOrder);

router.post('/feedbacks/create/:tourId', tokenMiddleware.verifyToken, userController.handleCreateNewFeedback);

router.get('/feedbacks', tokenMiddleware.verifyToken, userController.handleGetFeedbackByUserId);


export default router;
