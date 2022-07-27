import express from 'express';
import userController from '../controllers/userController';

let router = express.Router();

router.post('/register', userController.handleRegister);
router.post('/login', userController.handleLogin);

module.exports = router;