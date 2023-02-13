import express from 'express';
import countryController from '../controllers/countryController';

const router = express.Router();

router.post('/', countryController.handleCreateNewCountry);

router.get('/', countryController.handleGetAllCountryAndCity);

router.put('/:countryId', countryController.handleUpdateCountryByCountryId);

router.delete('/', countryController.handleDeleteCountryByCountryId);

export default router;
