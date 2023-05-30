import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import multer from 'multer';
import connectDB from './config/connectDB';
import initRoutes from './routes/index';
import db from './models';
dotenv.config();

const app = express();

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, token');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(multer().array());

connectDB(db.sequelize);

initRoutes(app);
app.listen(process.env.PORT || 8000, () => {
	console.log(`Server is running on http://localhost:${process.env.PORT || 8000}`);
});
