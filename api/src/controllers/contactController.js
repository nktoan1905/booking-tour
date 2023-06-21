import HttpStatusCode from '../helpers/httpStatusCode';
import mailTemplate from '../helpers/mailTemplate';
import contactServices from '../services/contactServices';
import sendMail from '../services/mailServices';

const contactController = {
	handleCreateNewContact: async (req, res) => {
		try {
			const { status, message } = await contactServices.createNewContact(req.body);
			await sendMail(
				{
					subject: 'Xác nhận thông tin',
					body: mailTemplate.sendComfirmContact(req.body),
				},
				req.body.email,
			);
			if (status) {
				res.status(HttpStatusCode.CREATED).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleGetAllContact: async (req, res) => {
		try {
			const { status, message, contacts } = await contactServices.getAllContact();
			if (status) {
				res.status(HttpStatusCode.OK).json({ message: message, data: contacts });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message: message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleGetAllTypeContact: async (req, res) => {
		try {
			const { status, message, typeContacts } = await contactServices.getAllContactType();
			if (status) {
				res.status(HttpStatusCode.OK).json({ message: message, data: typeContacts });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message: message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleUpdateStatusContact: async (req, res) => {
		try {
			const { status, message } = await contactServices.updateStatusContact(req.params.contactId, req.body.status);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message: message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message: message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleDeleteContact: async (req, res) => {
		try {
			const { status, message } = await contactServices.deleteContact(req.params.contactId);
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
export default contactController;
