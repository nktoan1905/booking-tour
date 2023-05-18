import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import multer from 'multer';
import connectDB from './config/connectDB';
import initRoutes from './routes/index';
import db from './models';
dotenv.config();

const app = express();

app.use(
	cors({
		origin: process.env.CLIENT_URL,
		optionsSuccessStatus: 200,
	}),
);
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,token');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(multer().array());

connectDB(db.sequelize);

initRoutes(app);
//
app.listen(process.env.PORT || 8000, () => {
	console.log(`Server is running on http://localhost:${process.env.PORT || 8000}`);
});
