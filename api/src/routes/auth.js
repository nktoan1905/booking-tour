import express from 'express';
import authController from '../controllers/authController';
import middlewareController from '../middleware/middlewareController';

const router = express.Router();

// register
router.post('/register', authController.registerUser);

// login
router.post('/login', authController.login);

// refresh token
router.post('/refresh', authController.refreshToken);

// log out
router.post('/logout', middlewareController.verifyToken, authController.userLogout);

export default router;
