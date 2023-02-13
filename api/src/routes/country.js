import express from 'express';
import countryController from '../controllers/countryController';
import checkIdExistMiddleware from '../middleware/checkExistMiddleware';

const router = express.Router();

router.post('/', countryController.handleCreateNewCountry);

router.get('/', countryController.handleGetAllCountryAndCity);

router.put('/:countryId', checkIdExistMiddleware.checkIdCountryExist, countryController.handleUpdateCountryByCountryId);

router.delete(
	'/:countryId',
	checkIdExistMiddleware.checkIdCountryExist,
	countryController.handleDeleteCountryByCountryId,
);

export default router;
