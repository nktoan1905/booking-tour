import express from 'express';
import cityController from '../controllers/cityController';
import checkExist from '../helpers/checkExist';
import roleMiddleware from '../middleware/roleMiddleware';
import checkIdExistMiddleware from '../middleware/checkExistMiddleware';

const router = express.Router();

router.post('/register', roleMiddleware.verifyAdminOrEmployee, cityController.handleCreateNewCity);

router.get('/', cityController.handleGetAllCity);

router.put(
	'/:cityId',
	roleMiddleware.verifyAdminOrEmployee,
	checkIdExistMiddleware.checkIdCityExist,
	cityController.handleUpdateCityByCityId,
);

router.delete(
	'/:cityId',
	roleMiddleware.verifyAdmin,
	checkIdExistMiddleware.checkIdCityExist,
	cityController.handleDeleteCityByCityId,
);

export default router;
