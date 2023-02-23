import HttpStatusCode from '../helpers/httpStatusCode';
import serviceServices from '../services/serivceServices';

const serviceController = {
	handleCreateNewService: async (req, res) => {
		try {
			const { status, message } = await serviceServices.createNewService(req.body);
			if (status) {
				res.status(HttpStatusCode.CREATED).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleGetAllServices: async (req, res) => {
		try {
			const { status, message, services } = await serviceServices.getAllServices();
			if (status) {
				res.status(HttpStatusCode.OK).json({ message, data: services });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleUpdateServiceByServiceId: async (req, res) => {
		try {
			const { status, message } = await serviceServices.updateServiceById(req.params.serviceId, req.body);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleDeleteServiceByServiceId: async (req, res) => {
		try {
			const { status, message } = await serviceServices.deleteServiceById(req.params.serviceId);
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
export default serviceController;
