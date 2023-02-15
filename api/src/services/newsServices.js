import UserRole from '../helpers/roleConst';
import Status from '../helpers/statusConst';
import db from '../models';

const newServices = {
	createNews: async (userId, data) => {
		return new Promise(async (resolve, reject) => {
			try {
				const news = await db.New.create({
					title: data.title,
					content: data.content,
					userId: userId,
					image: data.image,
					imageName: data.imageName,
					status: Status.ACTIVE,
				});
				if (news) {
					resolve({ status: true, message: 'Create news successfully!' });
				} else {
					reject({ status: false, message: 'Create news failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllNews: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const news = await db.New.findAll({
					attributes: ['id', 'title', 'content', 'userId', 'image', 'imageName', 'status'],
					include: [
						{
							model: db.User,
							as: 'userInfo',
							attributes: ['fullName', 'email'],
						},
					],
					raw: true,
					nest: true,
				});
				if (!news) {
					resolve({ status: false, message: 'New not found.' });
				} else {
					resolve({ status: true, message: 'Get all news Successfully.', news });
				}
			} catch (error) {
				console.log(error);
				reject(error);
			}
		});
	},
	updateNews: async (newsId, data) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isUpdate = await db.New.update(
					{
						title: data.title,
						content: data.content,
						image: data.image,
						imageName: data.imageName,
					},
					{
						where: { id: newsId },
					},
				);
				if (isUpdate) {
					resolve({ status: true, message: 'Update new successfully!' });
				} else {
					resolve({ status: false, message: 'Update failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	updateStatusNews: async (newsId, status) => {
		// 3 status Waiting, Aproved, Deny
		return new Promise(async (resolve, reject) => {
			try {
				const isUpdate = await db.New.update({ stauts: status }, { where: { id: newsId } });
				if (isUpdate) {
					resolve({ status: true, message: 'Update new successfully!' });
				} else {
					resolve({ status: false, message: 'Update failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	deleteNews: async (newsId, user) => {
		return new Promise(async (resolve, reject) => {
			try {
				const news = await db.New.findOne({ wheree: { id: newsId } });
				if (news.userId === user.id || user.roleId === UserRole.ADMIN || user.roleId === UserRole.EMPLOYEE) {
					const isDelete = await db.New.destroy({ where: { id: newsId } });
					if (isDelete) {
						resolve({ status: true, message: 'Delete new successfully!' });
					} else {
						resolve({ status: false, message: 'Delete failed!' });
					}
				} else {
					resolve({ status: false, message: 'Delete failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
};
export default newServices;
