import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/connectDB';
import authRoute from './routes/auth';
import userRoute from './routes/user';
dotenv.config();

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

connectDB();

app.get('/', function (req, res) {
	res.send('Hello World!');
});

// Routes
app.use('/v1/auth', authRoute);
app.use('/v1/user', userRoute);
//
app.listen(8000 || process.env.PORT, () => {
	console.log('Server is running');
});
// Authentication
/**
 * So sánh mk username vs trong db
 */
// Athutoirization
/**
 * bạn là ai bạn có quyền làm gì
 */
// JSOn web token dùng để xác thực người dùng
