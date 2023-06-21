import express from 'express';
import tourController from '../controllers/tourController';
import checkIdExistMiddleware from '../middleware/checkExistMiddleware';
import uploadCloud from '../config/cloudinary.config';
import roleMiddleware from '../middleware/roleMiddleware';

const router = express.Router();

router.post('/resgister', roleMiddleware.verifyAdminOrEmployee, tourController.handleCreateNewTour);

router.post(
	'/:tourId/categories/add',
	roleMiddleware.verifyAdminOrEmployee,
	checkIdExistMiddleware.checkIdTourExist,
	tourController.handleAddCategory,
);

router.delete(
	'/:tourId/categories/remove/:categoryId',
	roleMiddleware.verifyAdminOrEmployee,
	checkIdExistMiddleware.checkIdTourExist,
	tourController.handleRemoveCategory,
);

router.post(
	'/:tourId/cites/add',
	roleMiddleware.verifyAdminOrEmployee,
	checkIdExistMiddleware.checkIdTourExist,
	tourController.handleAddCity,
);

router.delete(
	'/:tourId/cites/remove',
	roleMiddleware.verifyAdminOrEmployee,
	checkIdExistMiddleware.checkIdTourExist,
	tourController.handleRemoveCity,
);

router.post(
	'/:tourId/departureDays/add',
	roleMiddleware.verifyAdminOrEmployee,
	checkIdExistMiddleware.checkIdTourExist,
	tourController.handleAddDepentureDay,
);

router.delete(
	'/:tourId/departureDays/remove/:departureDayId',
	roleMiddleware.verifyAdminOrEmployee,
	checkIdExistMiddleware.checkIdTourExist,
	tourController.handleRemoveDepartureDay,
);

router.post(
	'/:tourId/services/add',
	roleMiddleware.verifyAdminOrEmployee,
	roleMiddleware.verifyAdminOrEmployee,
	checkIdExistMiddleware.checkIdTourExist,
	tourController.handleAddService,
);

router.delete(
	'/:tourId/services/remove/:serviceId',
	roleMiddleware.verifyAdminOrEmployee,
	checkIdExistMiddleware.checkIdTourExist,
	tourController.handleRemoveService,
);

router.post(
	'/:tourId/promotions/add',
	roleMiddleware.verifyAdminOrEmployee,
	checkIdExistMiddleware.checkIdTourExist,
	tourController.handleAddPromotion,
);

router.delete(
	'/:tourId/promotions/remove/:promotionId',
	checkIdExistMiddleware.checkIdTourExist,
	tourController.handleRemovePromotion,
);

router.get('/', tourController.handleGetAllTours);

router.put(
	'/:tourId',
	roleMiddleware.verifyAdminOrEmployee,
	checkIdExistMiddleware.checkIdTourExist,
	tourController.handleUpdateTourByTuorId,
);

router.delete(
	'/:tourId',
	roleMiddleware.verifyAdminOrEmployee,
	checkIdExistMiddleware.checkIdTourExist,
	tourController.handleDeleteTourByTuorId,
);

router.post(
	'/:tourId/image/add',
	roleMiddleware.verifyAdminOrEmployee,
	checkIdExistMiddleware.checkIdTourExist,
	tourController.handleAddImage,
);

router.delete(
	'/:tourId/image/remove/:imageId',
	roleMiddleware.verifyAdminOrEmployee,
	checkIdExistMiddleware.checkIdTourExist,
	tourController.handleRemoveImage,
);

export default router;
