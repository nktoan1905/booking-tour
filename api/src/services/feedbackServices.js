import db from '../models';

const feedbackServices = {
	createNewFeedback: async (userId, tourId, data) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isCreated = await db.Feedback.create({
					userId: userId,
					tourId: tourId,
					content: data.content,
					star: data.star,
					status: 1,
					loadhome: 0,
				});
				if (isCreated) {
					resolve({ status: true, message: 'Create new feedback successfully' });
				} else {
					resolve({ status: false, message: 'Create new feedback failed' });
				}
			} catch (error) {
				console.log(error);
				reject(error);
			}
		});
	},
	getAllFeedBackByUserId: async (userId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const feedbacks = db.Feedback.findAll({
					where: {
						userId: userId,
					},
					include: [{ model: db.Tour }],
					nest: true,
					raw: false,
				});
				resolve({ status: true, message: 'Get all feedback by user id successfully', feedbacks });
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllFeedBack: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const feedbacks = db.Feedback.findAll({
					include: [
						{ model: db.Tour },
						{
							model: db.User,
							attributes: ['id', 'fullName', 'avatar'],
						},
					],
					nest: true,
					raw: false,
				});
				resolve({ status: true, message: 'Get all feedback by user id successfully', feedbacks });
			} catch (error) {
				reject(error);
			}
		});
	},
	updateFeedBack: async (feedbackId, data) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isUpdated = db.Feedback.update(
					{
						status: data.status,
						loadhome: data.loadhome,
					},
					{
						where: {
							id: feedbackId,
						},
					},
				);
				if (isUpdated) {
					resolve({ status: true, message: 'Update feedback successfully' });
				} else {
					resolve({ status: false, message: 'Update feedback failed' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
};
export default feedbackServices;
