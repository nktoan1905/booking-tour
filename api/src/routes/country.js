import express from 'express';
import countryController from '../controllers/countryController';
import checkIdExistMiddleware from '../middleware/checkExistMiddleware';
import roleMiddleware from '../middleware/roleMiddleware';

const router = express.Router();

router.post('/register', roleMiddleware.verifyAdminOrEmployee, countryController.handleCreateNewCountry);

router.get('/', countryController.handleGetAllCountryAndCity);

router.put(
	'/:countryId',
	roleMiddleware.verifyAdminOrEmployee,
	checkIdExistMiddleware.checkIdCountryExist,
	countryController.handleUpdateCountryByCountryId,
);

router.delete(
	'/:countryId',
	roleMiddleware.verifyAdmin,
	checkIdExistMiddleware.checkIdCountryExist,
	countryController.handleDeleteCountryByCountryId,
);

export default router;
