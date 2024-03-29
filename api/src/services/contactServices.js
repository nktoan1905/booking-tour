import db from '../models/index';

const contactServices = {
	createNewContact: async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isCreate = await db.Contact.create({
					fullName: data.fullName,
					phoneNumber: data.phoneNumber,
					email: data.email,
					address: data.address,
					countCustomer: data.countCustomer,
					companyName: data.companyName,
					title: data.title,
					content: data.content,
					typeContact: data.typeContact,
					status: true,
				});
				if (isCreate) {
					resolve({ status: true, message: 'Create new contact successfully' });
				} else {
					resolve({ status: false, message: 'Create new contact failed' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllContact: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const contacts = await db.Contact.findAll({
					attributes: [
						'id',
						'fullName',
						'phoneNumber',
						'email',
						'address',
						'countCustomer',
						'companyName',
						'title',
						'content',
						'typeContact',
						'status',
						'createdAt',
					],
					order: [['createdAt', 'DESC']],
					include: [
						{
							model: db.TypeContact,
							as: 'type',
							attributes: ['id', 'name'],
						},
					],
					raw: true,
					nest: true,
				});

				resolve({ status: true, message: 'Get all contacts successfully', contacts });
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllContactType: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const typeContacts = await db.TypeContact.findAll();
				if (typeContacts.length > 0) {
					resolve({ status: true, message: 'Get all type contacts successfully', typeContacts });
				} else {
					resolve({ status: false, message: 'Get all type contacts failed' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	updateStatusContact: async (contactId, status) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isUpdate = await db.Contact.update({ status: status }, { where: { id: contactId } });
				if (isUpdate) {
					resolve({ status: true, message: 'Update status successfully' });
				} else {
					resolve({ status: false, message: 'Update status failed' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	deleteContact: async (contactId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isDelete = await db.Contact.destroy({ where: { id: contactId } });
				if (isDelete) {
					resolve({ status: true, message: 'Delete contact successfully' });
				} else {
					resolve({ status: false, message: 'Delete contact failed' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
};
export default contactServices;
