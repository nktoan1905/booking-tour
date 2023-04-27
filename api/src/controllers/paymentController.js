import HttpStatusCode from '../helpers/httpStatusCode';
import dotenv from 'dotenv';
dotenv.config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const paymentController = {
	processPayment: async (req, res) => {
		try {
			const paymentIntent = await stripe.paymentIntents.create({
				amount: req.body.amount * 100,
				currency: 'usd',
				metadata: { integration_check: 'accept_a_payment' },
			});
			res.status(HttpStatusCode.OK).json({
				status: true,
				client_secret: paymentIntent.client_secret,
			});
		} catch (error) {
            console.log(error);
			res.status(HttpStatusCode.BAD_REQUEST).json({ message: 'Faled payment request' });
		}
	},
	sendStripApi: async (req, res) => {
		try {
			res.status(HttpStatusCode.OK).json({
				stripeApiKey: process.env.STRIPE_API_KEY,
			});
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json({ message: 'Faled to send' });
		}
	},
};
export default paymentController;
