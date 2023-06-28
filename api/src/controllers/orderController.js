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
		} catch (error) {}
	},
	getUserOrder: async (req, res) => {},
};
export default orderController;
