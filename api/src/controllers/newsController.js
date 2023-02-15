import HttpStatusCode from '../helpers/httpStatusCode';
import db from '../models';
import newServices from '../services/newsServices';

const newsController = {
	handleCreateNewNews: async (req, res) => {
		try {
			const { status, message } = await newServices.createNews(req.user.id, req.body);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleGetAllNews: async (req, res) => {
		try {
			const { status, message, news } = await newServices.getAllNews();
			if (status) {
				res.status(HttpStatusCode.OK).json({ message: message, data: news });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleUpdateNews: async (req, res) => {
		try {
			console.log(req.params.newsId);
			const { status, message } = await newServices.updateNews(req.params.newsId, req.body);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleUpdateStatusNews: async (req, res) => {
		try {
			const { status, message } = await newServices.updateStatusNews(req.params.newsId, req.body);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleDeleteNews: async (req, res) => {
		try {
			const { status, message } = await newServices.deleteNews(req.params.newsId, req.user);
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

export default newsController;
