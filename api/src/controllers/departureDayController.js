import HttpStatusCode from '../helpers/httpStatusCode';
import departureDayServices from '../services/departureDayServices';

const departureDayController = {
	handleCreateNewDepartureDay: async (req, res) => {
		try {
			const { status, message } = await departureDayServices.createNewDepartureDay(req.body);
			if (status) {
				res.status(HttpStatusCode.CREATED).json({ message: message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message: message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleGetAllDepartureDay: async (req, res) => {
		try {
			const { status, message, departureDays } = await departureDayServices.getAllDepartureDay();
			if (status) {
				res.status(HttpStatusCode.OK).json({ message: message, data: departureDays });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message: message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleUpdateDayStartInDepartureDay: async (req, res) => {
		try {
			const { status, message } = await departureDayServices.updateDayStartInDepartureDay(
				req.params.departureDayId,
				req.body,
			);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message: message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message: message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleUpdateStatusInDepartureDay: async (req, res) => {
		try {
			const { status, message } = await departureDayServices.updateStatusInDepartureDay(
				req.params.departureDayId,
				req.body,
			);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message: message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message: message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleDeleteDepartureDay: async (req, res) => {
		try {
			const { status, message } = await departureDayServices.deleteDepartureDay(req.params.departureDayId);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message: message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message: message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
};
export default departureDayController;
