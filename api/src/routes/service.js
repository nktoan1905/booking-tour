import express from 'express';
import countryController from '../controllers/countryController';
import serviceController from '../controllers/serviceController';

const router = express.Router();

router.post('/register', serviceController.handleCreateNewService);

router.get('/', serviceController.handleGetAllServices);

router.put('/:serviceId', serviceController.handleUpdateServiceByServiceId);

router.delete('/:serviceId', serviceController.handleDeleteServiceByServiceId);

export default router;
