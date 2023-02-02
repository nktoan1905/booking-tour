import promotionServices from '../services/promotionServices';

const promotionController = {
	handleCreateNewPromotion: async (req, res) => {
		try {
			const { status, message } = await promotionServices.createNewPromotion(req.body);
			if (status) {
				res.status(200).json({ message });
			} else res.status(400).json({ message });
		} catch (error) {
			res.status(400).json(error);
		}
	},
	handleGetAllPromotions: async (req, res) => {
		try {
			const { status, message, promotions } = await promotionServices.getAllPromotions();
			if (status) {
				res.status(200).json({ message, data: promotions });
			} else res.status(400).json({ message });
		} catch (error) {
			res.status(400).json(error);
		}
	},
	handleUpdatePromotion: async (req, res) => {
		try {
			if (!req.params.promotionId) {
				res.status(400).json({ message: 'Not found' });
			}
			const { status, message } = await promotionServices.updatePromotionById(req.params.promotionId, req.body);
			if (status) {
				res.status(200).json({ message });
			} else res.status(400).json({ message });
		} catch (error) {
			res.status(400).json(error);
		}
	},
	handleDeletePromotion: async (req, res) => {
		try {
			if (!req.params.promotionId) {
				res.status(400).json({ message: 'Not found' });
            }
				const { status, message } = await promotionServices.deletePromotionById(req.params.promotionId);
				if (status) {
					res.status(200).json({ message });
				} else res.status(400).json({ message });
			
		} catch (error) {
			res.status(400).json(error);
		}
	},
};

export default promotionController;
