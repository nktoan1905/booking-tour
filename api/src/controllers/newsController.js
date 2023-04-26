import HttpStatusCode from '../helpers/httpStatusCode';
import newCategory from '../helpers/newCategory';
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
	handleGetAllNewCategories: async (req, res) => {
		try {
			const { status, message, newsCategories } = await newServices.getAllCateogryNews();
			if (status) {
				res.status(HttpStatusCode.OK).json({ message: message, data: newsCategories });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message: message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleUpdateNews: async (req, res) => {
		try {
			const { status, message } = await newServices.updateNews(req.params.newsId, req.body, req.user);
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
