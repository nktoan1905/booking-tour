import express from 'express';
import otpGenerator from 'otp-generator';
import sendMail from '../services/mailServices';
import mailTemplate from '../helpers/mailTemplate';
const router = express.Router();

router.get('/generateOTP', async (req, res) => {
	const OTP = await otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
	await sendMail(
		{
			subject: 'OTP Verify',
			body: mailTemplate.verifyOTPMail(OTP),
		},
		'nktoan1905@gmail.com',
	);
	res.status(201).json(OTP);
});
export default router;
