import express from 'express';
import tokenMiddleware from '../middleware/tokenMiddleware';
import userController from '../controllers/userController';
import orderController from '../controllers/orderController';
import roleMiddleware from '../middleware/roleMiddleware';

const router = express.Router();

router.get('/', tokenMiddleware.verifyToken, userController.handleGetUserProfile);

router.put('/', tokenMiddleware.verifyToken, userController.handleUpdateProfile);

router.put('/update-password', tokenMiddleware.verifyToken, userController.handleUpdatePassword);

router.get('/flowing-tour', tokenMiddleware.verifyToken, userController.handleGetAllTourIdIsFlowingByUserId);

router.post('/create-flowing', tokenMiddleware.verifyToken, userController.handleAddNewFlowingTourByTourId);

router.delete(
	'/delete-flowing/:tourDepartureDayId',
	tokenMiddleware.verifyToken,
	userController.handleDeleteFlowingTourByTourId,
);

router.get('/orders', tokenMiddleware.verifyToken, orderController.getUserOrder);

router.post('/feedbacks/create/:tourId', tokenMiddleware.verifyToken, userController.handleCreateNewFeedback);

router.get('/feedbacks', tokenMiddleware.verifyToken, userController.handleGetFeedbackByUserId);

router.get('/feedbacks/all', roleMiddleware.verifyAdminOrEmployee, userController.handleGetAllFeedback);

router.put('/feedbacks/:feedbackId', roleMiddleware.verifyAdminOrEmployee, userController.handleUpdateFeeback);

export default router;
