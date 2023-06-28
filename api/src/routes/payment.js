import express from 'express';
import paymentController from '../controllers/paymentController';
import tokenMiddleware from '../middleware/tokenMiddleware';

const router = express.Router();

router.post('/create-payment-intent', tokenMiddleware.verifyToken, paymentController.processPayment);

router.get('/config', tokenMiddleware.verifyToken, paymentController.sendStripApi);

// router.get('/transation-id', paymentController.getTransation);

export default router;
