import express from 'express';
import cityController from '../controllers/cityController';
import checkExist from '../helpers/checkExist';
import roleMiddleware from '../middleware/roleMiddleware';

const router = express.Router();

router.post('/register', roleMiddleware.verifyAdminOrEmployee, cityController.handleCreateNewCity);

router.get('/', roleMiddleware.verifyAdminOrEmployee, cityController.handleGetAllCity);

router.put(
	'/:cityId',
	roleMiddleware.verifyAdminOrEmployee,
	checkExist.checkCityIdExist,
	cityController.handleUpdateCityByCityId,
);

router.delete(
	'/:cityId',
	roleMiddleware.verifyAdmin,
	checkExist.checkCityIdExist,
	cityController.handleDeleteCityByCityId,
);

export default router;
