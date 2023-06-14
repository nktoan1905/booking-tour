import express from 'express';
import promotionController from '../controllers/promotionController';
import checkIdExistMiddleware from '../middleware/checkExistMiddleware';
import roleMiddleware from '../middleware/roleMiddleware';

const router = express.Router();

// register
router.post('/register', roleMiddleware.verifyAdminOrEmployee, promotionController.handleCreateNewPromotion);

router.get('/', promotionController.handleGetAllPromotions);

router.put(
	'/:promotionId',
	roleMiddleware.verifyAdmin,
	checkIdExistMiddleware.checkIdPromotionExist,
	promotionController.handleUpdatePromotion,
);

router.delete(
	'/:promotionId',
	roleMiddleware.verifyAdmin,
	checkIdExistMiddleware.checkIdPromotionExist,
	promotionController.handleDeletePromotion,
);

export default router;module.exports = router;
