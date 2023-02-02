import express from 'express';
import newsController from '../controllers/newsController';
import tokenMiddleware from '../middleware/tokenMiddleware';
const router = express.Router();

router.get('/', newsController.handleGetAllNews);

router.post('/register', tokenMiddleware.verifyToken, newsController.handleCreateNewNews);

router.put('/:newsId', tokenMiddleware.verifyToken, newsController.handleUpdateNews);

router.put('/:newsId/status', tokenMiddleware.verifyToken   ,newsController.handleUpdateStatusNews);

router.delete('/:newsId', newsController.handleDeleteNews);

export default router;
