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
import db from './models';
dotenv.config();

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

connectDB(db.sequelize);

app.get('/', function (req, res) {
	res.send('Hello World!');
});

// Routes
app.use('/v1/auth', authRoute);
app.use('/v1/user', userRoute);
app.use('/v1/admin', adminRoute);
app.use('/v1/categories', categoriesRoute);
app.use('/v1/promotions', promotionsRoute);
app.use('/v1/countries', countryRoute);
app.use('/v1/cities', cityRoute);
app.use('/v1/news', newsRoute);
//
app.listen(8000 || process.env.PORT, () => {
	console.log('Server is running');
});
