import express from 'express';
import authRouter from './auth';
import postRouter from './post';
let router = express.Router();

let initWebRoutes = (app) => {
	router.get('/', (req, res) => {
		res.send('Hello world');
	});

	app.use('/', router);

	app.use('/api/user', authRouter);
	app.use('/api/post', postRouter);
};

module.exports = initWebRoutes;
