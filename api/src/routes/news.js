import express from 'express';
import newsController from '../controllers/newsController';
import checkIdExistMiddleware from '../middleware/checkExistMiddleware';
import roleMiddleware from '../middleware/roleMiddleware';
import tokenMiddleware from '../middleware/tokenMiddleware';
const router = express.Router();

router.get('/', newsController.handleGetAllNews);

router.get('/categories',  newsController.handleGetAllNewCategories);

router.post('/register', roleMiddleware.verifyAdminOrEmployee, newsController.handleCreateNewNews);

router.put(
	'/:newsId',
	roleMiddleware.verifyAdminOrEmployee,
	checkIdExistMiddleware.checkIdNewsExist,
	newsController.handleUpdateNews,
);

router.put(
	'/:newsId/status',
	roleMiddleware.verifyAdmin,
	checkIdExistMiddleware.checkIdNewsExist,
	newsController.handleUpdateStatusNews,
);

router.delete(
	'/:newsId',
	roleMiddleware.verifyAdmin,
	checkIdExistMiddleware.checkIdNewsExist,
	newsController.handleDeleteNews,
);

export default router;
