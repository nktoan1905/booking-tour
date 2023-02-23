import express from 'express';
import tourController from '../controllers/tourController';

import tokenMiddleware from '../middleware/tokenMiddleware';

const router = express.Router();

router.post('/resgister', tourController.handleCreateNewTour);

router.post('/:tourId/categories/add', tourController.handleAddCategory);

router.delete('/:tourId/categories/remove', tourController.handleRemoveCategory);

router.post('/:tourId/cites/add', tourController.handleAddCity);

router.delete('/:tourId/cites/remove', tourController.handleRemoveCity);

router.post('/:tourId/departureDays/add', tourController.handleAddDepentureDay);

router.delete('/:tourId/departureDays/remove', tourController.handleRemoveDepentureDay);

router.post('/:tourId/services/add', tourController.handleAddService);

router.delete('/:tourId/services/remove', tourController.handleRemoveService);

router.post('/:tourId/promotions/add', tourController.handleAddPromotion);

router.delete('/:tourId/promotions/remove', tourController.handleRemovePromotion);

router.get('/', tourController.handleGetAllTours);

export default router;
