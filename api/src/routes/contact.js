import express from 'express';
import contactController from '../controllers/contactController';
import checkIdExistMiddleware from '../middleware/checkExistMiddleware';
import roleMiddleware from '../middleware/roleMiddleware';

const router = express.Router();

router.post('/register', contactController.handleCreateNewContact);

router.get('/', roleMiddleware.verifyAdminOrEmployee, contactController.handleGetAllContact);

router.get('/type', contactController.handleGetAllTypeContact);

router.put(
	'/:contactId',
	roleMiddleware.verifyAdminOrEmployee,
	checkIdExistMiddleware.checkIdContactExist,
	contactController.handleUpdateStatusContact,
);

router.delete(
	'/:contactId',
	roleMiddleware.verifyAdminOrEmployee,
	checkIdExistMiddleware.checkIdContactExist,
	contactController.handleDeleteContact,
);

export default router;
