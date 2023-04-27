import express from 'express';
import authRoute from './auth';
import userRoute from './user';
import adminRoute from './admin';
import categoriesRoute from './category';
import promotionsRoute from './promotion';
import newsRoute from './news';
import countryRoute from './country';
import cityRoute from './city';
import contactRoute from './contact';
import departureDayRoute from './departureDay';
import serviceRoute from './service';
import tourRoute from './tour';
import paymentRoute from './payment';
import uploadRoute from './uploadClound';

const multer = require('multer');
const upload = multer();

let router = express.Router();

let initRoutes = (app) => {
	app.get('/', function (req, res) {
		res.send('<h1>Hello World!</h1>');
	});

	// Routes

	// Route for user
	app.use('/v1/auth', authRoute);
	app.use('/v1/user', userRoute);
	app.use('/v1/admin', adminRoute);
	app.use('/v1/upload', uploadRoute);
	// Route for tour
	app.use('/v1/tours', tourRoute);
	app.use('/v1/categories', categoriesRoute);
	app.use('/v1/promotions', promotionsRoute);
	app.use('/v1/countries', countryRoute);
	app.use('/v1/cities', cityRoute);
	app.use('/v1/departure-day', departureDayRoute);
	app.use('/v1/services', serviceRoute);
	app.use('/v1/payment', paymentRoute);
	// Route for something left
	app.use('/v1/news', newsRoute);
	app.use('/v1/contact', contactRoute);

	return app.use('/', router);
};
module.exports = initRoutes;
