import HttpStatusCode from '../helpers/httpStatusCode';
import contactServices from '../services/contactServices';
import sendMail from '../services/mailServices';

const contactController = {
	handleCreateNewContact: async (req, res) => {
		try {
			const { status, message } = await contactServices.createNewContact(req.body);
			if (status) {
				// sendMail(
				// 	{ subject: `<p>title ${req.body.title}</p>`, body: `<h1>${req.body.content}</h1>` },
				// 	'nktoan1905@gmail.com',
				// 	req.body.email,
				// );
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
