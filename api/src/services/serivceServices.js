import db from '../models';

const serviceServices = {
	createNewService: async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				const newService = await db.Service.create({
					name: data.name,
					description: data.description,
					icon: data.icon,
					status: 1,
				});
				if (newService) {
					resolve({ status: true, message: 'Create new service successfully!' });
				} else {
					resolve({ status: false, message: 'Create new service failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllServices: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const services = await db.Service.findAll({
					attributes: ['id', 'name', 'description', 'icon', 'status', 'createdAt', 'loadhome'],
				});
				if (services.length > 0) {
					resolve({ status: true, message: 'Get all services successfully!', services });
				} else {
					resolve({ status: false, message: 'Not found service' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	updateServiceById: async (serviceId, data) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isUpdate = await db.Service.update(
					{
						name: data.name,
						description: data.description,
						icon: data.icon,
						status: data.status,
						updatedAt: new Date(),
					},
					{ where: { id: serviceId } },
				);
				if (isUpdate) {
					resolve({ status: true, message: 'Update service successfully!' });
				} else {
					resolve({ status: false, message: 'Update service failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	deleteServiceById: async (serviceId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isDelete = await db.Service.destroy({ where: { id: serviceId } });
				if (isDelete) {
					resolve({ status: true, message: 'Delete service successfully!' });
				} else {
					resolve({ status: false, message: 'Delete service failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
};
export default serviceServices;
