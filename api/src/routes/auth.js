import express from 'express';
import authController from '../controllers/authController';
import tokenMiddleware from '../middleware/tokenMiddleware';

const router = express.Router();

// register
router.post('/register', authController.handleRegisterUser);

// login
router.post('/login', authController.handleLogin);

// refresh token
router.post('/refresh', authController.handleRefreshToken);

// log out
router.post('/logout', tokenMiddleware.verifyToken, authController.handleLogout);


export default router;
