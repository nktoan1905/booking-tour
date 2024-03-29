import orderServices from '../services/orderServices';
import HttpStatusCode from '../helpers/httpStatusCode';

const orderController = {
	createNewOrder: async (req, res) => {
		try {
			const { status, message } = await orderServices.createNewTransation(req.body, req.user.id);
			if (status) {
				res.status(HttpStatusCode.CREATED).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json({ error });
		}
	},
	getAllOrder: async (req, res) => {
		try {
			const { status, message, transactions } = await orderServices.getAllTransation();
			if (status) {
				res.status(HttpStatusCode.CREATED).json({ message, transactions });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json({ error });
		}
	},
	getUserOrder: async (req, res) => {
		try {
			const { status, message, transactions } = await orderServices.getTransationByUserId(req.user.id);
			if (status) {
				res.status(HttpStatusCode.CREATED).json({ message, transactions });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json({ error });
		}
	},
	getAllDepartureDayAndTransaction: async (req, res) => {
		try {
			const { orders } = await orderServices.getAllDepartureDayAndTransaction();
			res.json({ orders });
		} catch (error) {
			res.json(error);
		}
	},
	getAllTransationByDepartureDayId: async (req, res) => {
		try {
			const { status, message, transactions } = await orderServices.getAllTransationByDepartureDayId(
				req.params.departureDayId,
			);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message, transactions });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json({ error });
		}
	},
	handleUpdateStatusTransaction: async (req, res) => {
		try {
			const { status, message } = await orderServices.updateStatusTransaction(
				req.params.transactionId,
				req.body.status,
			);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json({ error });
		}
	},
};
export default orderController;
