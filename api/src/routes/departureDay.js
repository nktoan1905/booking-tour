import express from 'express';
import departureDayController from '../controllers/departureDayController';
import checkIdExistMiddleware from '../middleware/checkExistMiddleware';
import roleMiddleware from '../middleware/roleMiddleware';

const router = express.Router();

router.post('/', roleMiddleware.verifyAdminOrEmployee, departureDayController.handleCreateNewDepartureDay);

router.get('/', roleMiddleware.verifyAdminOrEmployee, departureDayController.handleGetAllDepartureDay);

router.put(
	'/:departureDayId/day-start',
	roleMiddleware.verifyAdminOrEmployee,
	checkIdExistMiddleware.checkIdDepartureDayExist,
	departureDayController.handleUpdateDayStartInDepartureDay,
);

router.put(
	'/:departureDayId/status',
	roleMiddleware.verifyAdminOrEmployee,
	checkIdExistMiddleware.checkIdDepartureDayExist,
	departureDayController.handleUpdateStatusInDepartureDay,
);

router.delete(
	'/:departureDayId',
	roleMiddleware.verifyAdmin,
	checkIdExistMiddleware.checkIdDepartureDayExist,
	departureDayController.handleDeleteDepartureDay,
);

export default router;
