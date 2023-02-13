import HttpSatusCode from '../helpers/httpStatusCode';
import cityServices from '../services/cityServices';

const cityController = {
	handleCreateNewCity: async (req, res) => {
		try {
			const { status, message } = await cityServices.createNewCity(req.body);
			if (status) {
				res.status(HttpSatusCode.CREATED).json({ message: message });
			} else {
				res.status(HttpSatusCode.BAD_REQUEST).json({ message: message });
			}
		} catch (error) {
			res.status(HttpSatusCode.BAD_REQUEST).json(error);
		}
	},
	handleGetAllCity: async (req, res) => {
		try {
			const { status, message, cities } = await cityServices.getAllCity();
			if (status) {
				res.status(HttpSatusCode.OK).json({
					message: message,
					data: cities,
				});
			} else {
				res.status(HttpSatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpSatusCode.BAD_REQUEST).json(error);
		}
	},
	handleUpdateCityByCityId: async (req, res) => {
		try {
			const { status, message } = await cityServices.updateCity(req.params.cityId, req.body);
			if (status) {
				res.status(HttpSatusCode.OK).json({ message: message });
			} else {
				res.status(HttpSatusCode.BAD_REQUEST).json({ message: message });
			}
		} catch (error) {
			res.status(HttpSatusCode.BAD_REQUEST).json(error);
		}
	},
	handleDeleteCityByCityId: async (req, res) => {
		try {
			const { status, message } = await cityServices.deleteCity(req.params.cityId);
			if (status) {
				res.status(HttpSatusCode.OK).json({ message: message });
			} else {
				res.status(HttpSatusCode.BAD_REQUEST).json({ message: message });
			}
		} catch (error) {
			res.status(HttpSatusCode.BAD_REQUEST).json(error);
		}
	},
};
export default cityController;
