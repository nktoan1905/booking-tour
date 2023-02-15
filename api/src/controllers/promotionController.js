import HttpStatusCode from '../helpers/httpStatusCode';
import promotionServices from '../services/promotionServices';

const promotionController = {
	handleCreateNewPromotion: async (req, res) => {
		try {
			const { status, message } = await promotionServices.createNewPromotion(req.body);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else res.status(HttpStatusCode.BAD_REQUEST).json({ message });
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleGetAllPromotions: async (req, res) => {
		try {
			const { status, message, promotions } = await promotionServices.getAllPromotions();
			if (status) {
				res.status(HttpStatusCode.OK).json({ message, data: promotions });
			} else res.status(HttpStatusCode.BAD_REQUEST).json({ message });
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleUpdatePromotion: async (req, res) => {
		try {
			if (!req.params.promotionId) {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message: 'Not found' });
			}
			const { status, message } = await promotionServices.updatePromotionById(req.params.promotionId, req.body);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else res.status(HttpStatusCode.BAD_REQUEST).json({ message });
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleDeletePromotion: async (req, res) => {
		try {
			if (!req.params.promotionId) {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message: 'Not found' });
            }
				const { status, message } = await promotionServices.deletePromotionById(req.params.promotionId);
				if (status) {
					res.status(HttpStatusCode.OK).json({ message });
				} else res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
};

export default promotionController;
