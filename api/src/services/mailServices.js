import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URL = process.env.REDIRECT_URL;
const REDIRECT_TOKEN = process.env.REDIRECT_TOKEN;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL, REDIRECT_TOKEN);

oAuth2Client.setCredentials({ refresh_token: REDIRECT_TOKEN });

const sendMail = async (dataSent, toUser) => {
	try {
		const accessToken = await oAuth2Client.getAccessToken();
		const transport = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				type: 'OAuth2',
				user: 'bookingtour1905@gmail.com',
				clientId: CLIENT_ID,
				clientSecret: CLIENT_SECRET,
				refreshToken: REDIRECT_TOKEN,
				accessToken: accessToken,
			},
		});
		let info = await transport.sendMail({
			from: `"Booking Tour 👻" <bookingtour1905@gmail.com>`, // sender address
			to: toUser, // list of receivers
			subject: dataSent.subject, // Subject line
			html: dataSent.body, // html body
		});
	} catch (error) {
		console.log(error);
	}
};
export default sendMail;
