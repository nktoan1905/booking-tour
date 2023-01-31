import express from 'express';
import authController from '../controllers/authController';
import middlewareController from '../middleware/middlewareController';

const router = express.Router();

// register
router.post('/register', authController.handleRegisterUser);

// login
router.post('/login', authController.handleLogin);

// refresh token
router.post('/refresh', authController.handleRefreshToken);

// log out
router.post('/logout', middlewareController.verifyToken, authController.handleLogout);

export default router;
