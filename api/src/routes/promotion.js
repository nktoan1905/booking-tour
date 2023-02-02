import express from 'express';
import promotionController from '../controllers/promotionController';

const router = express.Router();

// register
router.post('/register', promotionController.handleCreateNewPromotion);

router.get('/', promotionController.handleGetAllPromotions);

router.put('/:promotionId', promotionController.handleUpdatePromotion);

router.delete('/:promotionId', promotionController.handleDeletePromotion);

export default router;
