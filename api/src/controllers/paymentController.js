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
				automatic_payment_methods: {
					enabled: true,
				},
			});
			res.status(HttpStatusCode.OK).json({
				status: true,
				client_secret: paymentIntent.client_secret,
			});
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json({ message: 'Failed payment request' });
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
	getTransation: async (req, res) => {
		stripe.paymentIntents.retrieve(req.body.paymentIntentId, (err, paymentIntent) => {
			if (err) {
				console.error('Lỗi khi lấy thông tin giao dịch:', err);
				res.json({ err });
			} else {
				const transactionId = paymentIntent.id;
				res.json({ transactionId });
				console.log('Mã giao dịch:', transactionId);
			}
		});
	},
};
export default paymentController;
