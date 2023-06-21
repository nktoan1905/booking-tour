import HttpStatusCode from '../helpers/httpStatusCode';
import tourServices from '../services/tourServices';

const tourController = {
	handleCreateNewTour: async (req, res) => {
		try {
			const { status, message } = await tourServices.createNewTour(req.body);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleAddCategory: async (req, res) => {
		try {
			const { status, message } = await tourServices.addCategory(req.params.tourId, req.body.categoryId);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleRemoveCategory: async (req, res) => {
		try {
			const { status, message } = await tourServices.removeCategory(req.params.tourId, req.params.categoryId);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleAddService: async (req, res) => {
		try {
			const { status, message } = await tourServices.addService(req.params.tourId, req.body.serviceId);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleRemoveService: async (req, res) => {
		try {
			const { status, message } = await tourServices.removeService(req.params.tourId, req.params.serviceId);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleAddPromotion: async (req, res) => {
		try {
			const { status, message } = await tourServices.addPromotion(req.params.tourId, req.body.promotionId);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleRemovePromotion: async (req, res) => {
		try {
			const { status, message } = await tourServices.removePromotion(req.params.tourId, req.params.promotionId);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleAddCity: async (req, res) => {
		try {
			const { status, message } = await tourServices.addCity(req.params.tourId, req.body.cityId);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleRemoveCity: async (req, res) => {
		try {
			const { status, message } = await tourServices.removeCity(req.params.tourId, req.body.cityId);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleAddDepentureDay: async (req, res) => {
		try {
			const { status, message } = await tourServices.addDepartureDay(req.params.tourId, req.body);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleRemoveDepartureDay: async (req, res) => {
		try {
			const { status, message } = await tourServices.removeDepartureDay(req.params.tourId, req.params.departureDayId);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleGetAllTours: async (req, res) => {
		try {
			const { status, message, tours } = await tourServices.getAllTours();
			if (status) {
				res.status(HttpStatusCode.OK).json({ message: message, data: tours });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleUpdateTourByTuorId: async (req, res) => {
		try {
			const { status, message } = await tourServices.updateTourByTourId(req.params.tourId, req.body);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message: message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleDeleteTourByTuorId: async (req, res) => {
		try {
			const { status, message } = await tourServices.deleteTourByTourId(req.params.tourId);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message: message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleAddImage: async (req, res) => {
		try {
			const { status, message } = await tourServices.addImage(req.body, req.params.tourId);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleRemoveImage: async (req, res) => {
		try {
			const { status, message } = await tourServices.removeImage(req.params.imageId, req.params.tourId);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
};
export default tourController;
