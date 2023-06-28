import HttpStatusCode from '../helpers/httpStatusCode';
import commemtServices from '../services/commentServices';

const commentController = {
	handleAddComment: async (req, res) => {
		try {
			const { status, message } = await commemtServices.addComment(req.params.tourId, req.user.id, req.body.text);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json({ error });
		}
	},
	handleAddReply: async (req, res) => {
		try {
			const { status, message } = await commemtServices.addReply(req.user.id, req.params.commentId, req.body.text);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json({ error });
		}
	},
	handleRemoveComment: async (req, res) => {
		try {
			const { status, message } = await commemtServices.removeComment(req.params.commentId);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json({ error });
		}
	},
	handleRemoveReply: async (req, res) => {
		try {
			const { status, message } = await commemtServices.removeReply(req.params.replyId);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json({ error });
		}
	},
	handleGetAllCommentAndReply: async (req, res) => {
		try {
			const { status, message, comments } = await commemtServices.getAllCommentAndReply(req.params.tourId);
			res.status(HttpStatusCode.OK).json({ comments });
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json({ error });
		}
	},
};
export default commentController;
