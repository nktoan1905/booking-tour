import express from 'express';

import tokenMiddleware from '../middleware/tokenMiddleware';

const router = express.Router();

router.get('/', tokenMiddleware.verifyToken, userController.handleGetUserProfile);

router.put('/', tokenMiddleware.verifyToken, userController.handleUpdateProfile);

export default router;
