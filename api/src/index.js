import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/connectDB';
import authRoute from './routes/auth';
import userRoute from './routes/user';
import adminRoute from './routes/admin';
import categoriesRoute from './routes/category';
import promotionsRoute from './routes/promotion';
import newsRoute from './routes/news';
import countryRoute from './routes/country';
import cityRoute from './routes/city';
import contactRoute from './routes/contact';
import departureDayRoute from './routes/departureDay';
import serviceRoute from './routes/service';
import tourRoute from './routes/tour';
import OTPRoute from './routes/OTP';
import db from './models';
dotenv.config();

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

connectDB(db.sequelize);

app.get('/', function (req, res) {
	res.send('<h1>Hello World!</h1>');
});

// Routes
// Route for user
app.use('/v1', OTPRoute);
app.use('/v1/auth', authRoute);
app.use('/v1/user', userRoute);
app.use('/v1/admin', adminRoute);
// Route for tour
app.use('/v1/tours', tourRoute);
app.use('/v1/categories', categoriesRoute);
app.use('/v1/promotions', promotionsRoute);
app.use('/v1/countries', countryRoute);
app.use('/v1/cities', cityRoute);
app.use('/v1/departure-day', departureDayRoute);
app.use('/v1/services', serviceRoute);
// Route for something left
app.use('/v1/news', newsRoute);
app.use('/v1/contact', contactRoute);

//
app.listen(process.env.PORT || 8000, () => {
	console.log(`Server is running on http://localhost:${process.env.PORT || 8000}`);
});
