import express from 'express';
import tourController from '../controllers/tourController';
import checkIdExistMiddleware from '../middleware/checkExistMiddleware';

import tokenMiddleware from '../middleware/tokenMiddleware';

const router = express.Router();

router.post('/resgister', tourController.handleCreateNewTour);

router.post('/:tourId/categories/add', checkIdExistMiddleware.checkIdTourExist, tourController.handleAddCategory);

router.delete(
	'/:tourId/categories/remove',
	checkIdExistMiddleware.checkIdTourExist,
	tourController.handleRemoveCategory,
);

router.post('/:tourId/cites/add', checkIdExistMiddleware.checkIdTourExist, tourController.handleAddCity);

router.delete('/:tourId/cites/remove', checkIdExistMiddleware.checkIdTourExist, tourController.handleRemoveCity);

router.post(
	'/:tourId/departureDays/add',
	checkIdExistMiddleware.checkIdTourExist,
	tourController.handleAddDepentureDay,
);

router.delete(
	'/:tourId/departureDays/remove',
	checkIdExistMiddleware.checkIdTourExist,
	tourController.handleRemoveDepartureDay,
);

router.post('/:tourId/services/add', checkIdExistMiddleware.checkIdTourExist, tourController.handleAddService);

router.delete('/:tourId/services/remove', checkIdExistMiddleware.checkIdTourExist, tourController.handleRemoveService);

router.post('/:tourId/promotions/add', checkIdExistMiddleware.checkIdTourExist, tourController.handleAddPromotion);

router.delete(
	'/:tourId/promotions/remove',
	checkIdExistMiddleware.checkIdTourExist,
	tourController.handleRemovePromotion,
);

router.get('/', tourController.handleGetAllTours);

router.put('/:tourId', tourController.handleUpdateTourByTuorId);

router.delete('/:tourId', tourController.handleDeleteTourByTuorId);

export default router;
