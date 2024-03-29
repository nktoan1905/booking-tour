import newCategory from '../helpers/newCategory';
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
					categoryId: data.categoryId,
					status: Status.INACTIVE,
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
					attributes: ['id', 'title', 'content', 'userId', 'image', 'imageName', 'status', 'categoryId', 'createdAt'],
					order: [['createdAt', 'DESC']],
					include: [
						{
							model: db.User,
							as: 'userInfo',
							attributes: ['id', 'fullName', 'email', 'avatar'],
						},
						{
							model: db.NewsCategory,
							as: 'type',
							attributes: ['id', 'name', 'url'],
						},
					],
					raw: true,
					nest: true,
				});

				resolve({ status: true, message: 'Get all news Successfully.', news });
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllCateogryNews: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const newsCategories = await db.NewsCategory.findAll();
				resolve({ status: true, message: 'Get all news categories successfully!', newsCategories });
			} catch (error) {
				reject(error);
			}
		});
	},
	updateNews: async (newsId, data, user) => {
		return new Promise(async (resolve, reject) => {
			try {
				const news = await db.New.findOne({ where: { id: newsId } });
				if (news.userId !== user.id && user.roleId !== UserRole.ADMIN) {
					resolve({ status: false, message: 'Update failed!' });
				}
				const isUpdate = await db.New.update(
					{
						title: data.title,
						categoryId: data.categoryId,
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
				const isUpdate = await db.New.update({ status: status }, { where: { id: newsId } });
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
