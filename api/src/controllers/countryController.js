import HttpSatusCode from '../helpers/httpStatusCode';
import countryServices from '../services/countryServices';

const countryController = {
	handleCreateNewCountry: async (req, res) => {
		try {
			const { status, message } = await countryServices.createNewCountry(req.body);
			if (status) {
				res.status(HttpSatusCode.CREATED).json({ message });
			} else {
				res.status(HttpSatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpSatusCode.BAD_REQUEST).json(error);
		}
	},
	handleGetAllCountryAndCity: async (req, res) => {
		try {
			const { status, message, countries } = await countryServices.getAllCountryAndCity();
			if (status) {
				res.status(HttpSatusCode.OK).json({ message: message, data: countries });
			} else {
				res.status(HttpSatusCode.BAD_REQUEST).json({ message: message });
			}
		} catch (error) {
			res.status(HttpSatusCode.BAD_REQUEST).json(error);
		}
	},
	handleUpdateCountryByCountryId: async (req, res) => {
		try {
			const { status, message } = await countryServices.updateCountryByCountryId(req.params.countryId, req.body);
			if (status) {
				res.status(HttpSatusCode.OK).json({ message });
			} else {
				res.status(HttpSatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpSatusCode.BAD_REQUEST).json(error);
		}
	},
	handleDeleteCountryByCountryId: async (req, res) => {
		try {
			const { status, message } = await countryServices.deleteCountryByCountryId(req.params.countryId);
			if (status) {
				res.status(HttpSatusCode.OK).json({ message });
			} else {
				res.status(HttpSatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpSatusCode.BAD_REQUEST).json(error);
		}
	},
};
export default countryController;
