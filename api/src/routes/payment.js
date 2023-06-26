import express from 'express';
import paymentController from '../controllers/paymentController';
import tokenMiddleware from '../middleware/tokenMiddleware';

const router = express.Router();

router.post('/process', tokenMiddleware.verifyToken, paymentController.processPayment);

router.get('/stripeapi', tokenMiddleware.verifyToken, paymentController.sendStripApi);

router.post('/create-checkout-session', paymentController.createCheckoutSession);

export default router;
