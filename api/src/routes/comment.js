import express from 'express';
import tokenMiddleware from '../middleware/tokenMiddleware';
import commentController from '../controllers/commentController';

const router = express.Router();

router.post('/:tourId/add-comment', tokenMiddleware.verifyToken, commentController.handleAddComment);

router.post('/add-reply/:commentId', tokenMiddleware.verifyToken, commentController.handleAddReply);

router.delete('/remove/:commentId', tokenMiddleware.verifyToken, commentController.handleRemoveComment);

router.delete('/remove/:commentId/:replyId', tokenMiddleware.verifyToken, commentController.handleRemoveReply);

router.get('/:tourId', commentController.handleGetAllCommentAndReply);

export default router;
