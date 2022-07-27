import jwt from 'jsonwebtoken';
import useServices from '../services/userServices';
require('dotenv').config();
let handleRegister = async (req, res) => {
	try {
		const { status, message } = await useServices.createNewUser(req.body);
		if (status === false) {
			res.status(400).json({
				message: message,
			});
		} else {
			res.status(200).json({
				message: message,
			});
		}
	} catch (error) {
		res.status(400).send(error);
	}
};

let handleLogin = async (req, res) => {
	try {
		const { status, message, userId } = await useServices.userLogin(req.body);
		if (status === false) {
			res.status(400).json({
				message: message,
			});
		} else {
			const token = jwt.sign({ _id: userId }, process.env.TOKEN_SECRET);
			res.header('auth-token', token).status(200).json({ message: message, token: token });
		}
	} catch (error) {
		res.status(400).send(error);
	}
};
module.exports = {
	handleLogin: handleLogin,
	handleRegister: handleRegister,
};
