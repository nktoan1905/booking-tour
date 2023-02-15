import express from 'express';
import newsController from '../controllers/newsController';
import checkIdExistMiddleware from '../middleware/checkExistMiddleware';
import roleMiddleware from '../middleware/roleMiddleware';
import tokenMiddleware from '../middleware/tokenMiddleware';
const router = express.Router();

router.get('/', newsController.handleGetAllNews);

router.post('/register', tokenMiddleware.verifyToken, newsController.handleCreateNewNews);

router.put(
	'/:newsId',
	tokenMiddleware.verifyToken,
	checkIdExistMiddleware.checkIdNewsExist,
	newsController.handleUpdateNews,
);

router.put(
	'/:newsId/status',
	roleMiddleware.verifyAdminOrEmployee,
	checkIdExistMiddleware.checkIdNewsExist,
	newsController.handleUpdateStatusNews,
);

router.delete(
	'/:newsId',
	tokenMiddleware.verifyToken,
	checkIdExistMiddleware.checkIdNewsExist,
	newsController.handleDeleteNews,
);

export default router;
