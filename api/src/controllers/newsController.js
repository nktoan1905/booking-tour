import db from '../models';
import newServices from '../services/newsServices';

const newsController = {
	handleCreateNewNews: async (req, res) => {
		try {
			const { status, message } = await newServices.createNews(req.user.id, req.body);
			if (status) {
				res.status(200).json({ message });
			} else {
				res.status(400).json({ message });
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
	handleGetAllNews: async (req, res) => {
		try {
			const { status, message, news } = await newServices.getAllNews();
			if (status) {
				res.status(200).json({ message: message, data: news });
			} else {
				res.status(400).json({ message });
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
	handleUpdateNews: async (req, res) => {
		try {
			console.log(req.params.newsId);
			const { status, message } = await newServices.updateNews(req.params.newsId, req.body);
			if (status) {
				res.status(200).json({ message });
			} else {
				res.status(400).json({ message });
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
	handleUpdateStatusNews: async (req, res) => {
		try {
			const { status, message } = await newServices.updateStatusNews(req.params.newsId, req.body);
			if (status) {
				res.status(200).json({ message });
			} else {
				res.status(400).json({ message });
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
	handleDeleteNews: async (req, res) => {
		try {
			const { status, message } = await newServices.deleteNews(req.params.newsId);
			if (status) {
				res.status(200).json({ message });
			} else {
				res.status(400).json({ message });
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
};

export default newsController;
