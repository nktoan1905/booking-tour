import db from '../models';

const commemtServices = {
	addComment: async (tourId, userId, text) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isCreate = await db.Comment.create({
					tourId: tourId,
					userId: userId,
					text: text,
				});
				if (isCreate) {
					resolve({ status: true, message: 'Create new comment successfully!' });
				} else {
					resolve({ status: false, message: 'Create new comment failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	removeComment: async (commentId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isDestroy = await db.Comment.destroy({
					where: {
						id: commentId,
					},
				});
				const isDestroyAllReply = await db.Reply.destroy({
					where: {
						commentId: commentId,
					},
				});
				if (isDestroy) {
					resolve({ status: true, message: 'Remove comment successfully!' });
				} else {
					resolve({ status: false, message: 'Remove comment failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	addReply: async (userId, commentId, text) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isCreate = await db.Reply.create({
					userId: userId,
					commentId: commentId,
					text: text,
				});
				if (isCreate) {
					resolve({ status: true, message: 'Create new reply successfully!' });
				} else {
					resolve({ status: false, message: 'Create new reply failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	removeReply: async (replyId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isDestroyReply = await db.Reply.destroy({
					where: {
						id: replyId,
					},
				});
				if (isDestroyReply) {
					resolve({ status: true, message: 'Remove reply successfully' });
				} else {
					resolve({ status: false, message: 'Remove reply failed' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllCommentAndReply: async (tourId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const comments = await db.Comment.findAll({
					where: {
						tourId: tourId,
					},
					include: [
						{
							model: db.User,
							attributes: ['fullName', 'avatar'],
						},
						{
							model: db.Reply,
							as: 'replyComments',
							attributes: ['id', 'userId', 'text'],
							include: [
								{
									model: db.User,
									attributes: ['fullName', 'avatar'],
								},
							],
						},
					],
					nest: true,
					raw: false,
				});
				resolve({ status: true, message: 'asd', comments });
			} catch (error) {
				reject(error);
			}
		});
	},
};
export default commemtServices;
