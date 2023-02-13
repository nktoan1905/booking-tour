import express from 'express';
import cityController from '../controllers/cityController';

const router = express.Router();

router.post('/', cityController.handleCreateNewCity);

router.get('/', cityController.handleGetAllCity);

router.put('/:cityId', cityController.handleUpdateCityByCityId);

router.delete('/:cityId', cityController.handleDeleteCityByCityId);

export default router;
