import db from '../models';

import bcrypt from 'bcrypt';
import { Op } from 'sequelize';
import UserRole from '../helpers/roleConst';
import Status from '../helpers/statusConst';
import UserHelpers from '../helpers/userHelper';
import sendMail from './mailServices';

const salt = bcrypt.genSaltSync(10);

const userServices = {
	getAllMembers: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const members = await db.User.findAll({
					where: { roleId: { [Op.in]: [UserRole.MEMBERS, UserRole.SLIVER_MEMBER, UserRole.GOLDER_MEMBER] } },
					attributes: [
						'id',
						'fullName',
						'gender',
						'email',
						'avatar',
						'address',
						'phoneNumber',
						'dob',
						'roleId',
						'status',
						'createdAt',
					],
					order: [['createdAt', 'DESC']],
				});
				resolve({
					status: true,
					message: 'Get all members successfully!',
					members,
				});
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllEmployees: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const employees = await db.User.findAll({
					where: { roleId: UserRole.EMPLOYEE },
					attributes: [
						'id',
						'fullName',
						'gender',
						'email',
						'avatar',
						'address',
						'phoneNumber',
						'dob',
						'roleId',
						'status',
						'createdAt',
					],
				});

				resolve({
					status: true,
					message: 'Get all employees successfully!',
					employees,
				});
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllAdmins: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const admins = await db.User.findAll({
					where: { roleId: UserRole.ADMIN },
					attributes: [
						'id',
						'fullName',
						'gender',
						'email',
						'avatar',
						'address',
						'phoneNumber',
						'dob',
						'roleId',
						'status',
						'createdAt',
					],
				});
				resolve({
					status: true,
					message: 'Get all admins successfully!',
					admins,
				});
			} catch (error) {
				reject(error);
			}
		});
	},
	getUserProfileById: async (id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const userProfile = await db.User.findOne({
					where: { id: id },
					attributes: ['fullName', 'gender', 'email', 'avatar', 'address', 'phoneNumber', 'dob', 'status'],
					include: [
						{
							model: db.Role,
							as: 'roleInfo',
							attributes: ['name', 'status'],
						},
					],
					nest: true,
					raw: true,
				});
				if (!userProfile) {
					resolve({
						status: false,
						message: 'User not found',
					});
				} else {
					resolve({
						status: true,
						message: 'Get user information successfully!',
						userProfile,
					});
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	createEmployee: async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				let emailIsExist = await db.User.findOne({
					where: { email: data.email },
				});
				if (emailIsExist) {
					return resolve({
						status: false,
						message: 'Email was already exsit.',
					});
				}
				let hashed = await bcrypt.hash(data.password, salt);
				let newEmployee = await db.User.create({
					fullName: data.fullName,
					gender: data.gender,
					email: data.email,
					password: hashed,
					avatar: data.avatar,
					address: data.address,
					phoneNumber: data.phoneNumber,
					dob: data.dob,
					roleId: UserRole.EMPLOYEE,
					status: Status.ACTIVE,
				});
				const { status, message } = await sendMail(
					{
						subject: 'New employee account',
						body: `<h1>New Account</h1> <div>Email: ${data.email}</div> <div>Password: ${data.password}</div>`,
					},
					data.email,
				);
				if (status) {
					resolve({
						status: true,
						message: 'Create new employee successfully!',
					});
				} else {
					resolve({
						status: false,
						message: 'Sent mail failed',
					});
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	updateUserProfile: async (id, data) => {
		return new Promise(async (resolve, reject) => {
			try {
				const user = await db.User.findOne({
					where: { id: id },
				});
				if (!user) {
					resolve({
						status: false,
						message: 'User not found.',
					});
				}
				const isUpdate = await db.User.update(
					{
						fullName: data.fullName,
						gender: data.gender,
						avatar: data.avatar,
						phoneNumber: data.phoneNumber,
						address: data.address,
						dob: data.dob,
						updatedAt: new Date(),
					},
					{ where: { id: id } },
				);
				const newUserInfo = await db.User.findOne({
					where: { id: id },
					attributes: ['fullName', 'gender', 'avatar', 'phoneNumber', 'address', 'dob', 'roleId', 'status', 'email'],
				});
				if (isUpdate) {
					resolve({ status: true, message: 'Update was successful', newUserInfo });
				} else {
					resolve({ status: false, message: 'Update failed' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	updatePassword: async (id, oldPassword, newPassword) => {
		return new Promise(async (resolve, reject) => {
			try {
				const user = await db.User.findOne({
					where: { id: id },
				});
				if (!user) {
					resolve({ status: false, message: 'User not found' });
				}
				let validPassword = await bcrypt.compare(oldPassword, user.password);
				if (!validPassword) {
					resolve({ status: false, message: 'Confirm password incorrect' });
				}
				let hashed = await bcrypt.hash(newPassword, salt);

				const isUpdated = await db.User.update(
					{
						password: hashed,
					},
					{ where: { id: id } },
				);
				if (isUpdated) {
					resolve({ status: true, message: 'Password updated successfully' });
				} else {
					resolve({ status: false, message: 'Password updated fail' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	updateMemberAndEmployeeStatus: async (id) => {
		return new Promise(async (resolve, reject) => {
			try {
				let checkIdExist = await db.User.findOne({ where: { id: id } });
				if (!checkIdExist) {
					resolve({
						status: false,
						message: 'Id not exist',
					});
				}
				let user = checkIdExist;
				if (user.status === Status.ACTIVE) {
					let isUpdate = await db.User.update({ status: Status.DELETE, updatedAt: new Date() }, { where: { id: id } });
					if (isUpdate) {
						resolve({ status: true, message: 'Update active status to delete status successfully!' });
					} else {
						resolve({ status: false, message: 'Update status failed.' });
					}
				} else {
					let isUpdate = await db.User.update({ status: Status.ACTIVE, updatedAt: new Date() }, { where: { id: id } });
					if (isUpdate) {
						resolve({ status: true, message: 'Update delete status to active status successfully!' });
					} else {
						resolve({ status: false, message: 'Update status failed.' });
					}
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	updateUserRole: async (id, roleId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const user = await db.User.findOne({ where: { id: id } });
				if (!user) {
					resolve({ status: false, message: 'This user does not exist.' });
				}

				let isUpdate = await db.User.update({ roleId: roleId }, { where: { id: id } });
				if (isUpdate) {
					resolve({ status: true, message: 'Update role is successfully' });
				} else {
					resolve({ status: false, message: 'Update role failed' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	deleteMemberById: async (id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isDelete = await db.User.destroy({ where: { id: id } });
				if (isDelete) {
					resolve({ status: true, message: 'Delete user successfully!' });
				} else {
					resolve({ status: false, message: 'Delete failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	deleteEmployeeById: async (id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isDelete = await db.User.destroy({ where: { id: id, roleId: UserRole.EMPLOYEE } });
				if (isDelete) {
					resolve({ status: true, message: 'Delete employee successfully!' });
				} else {
					resolve({ status: false, message: 'Delete failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	findUserByEmail: async (email) => {
		return new Promise(async (resolve, reject) => {
			try {
				const user = await db.User.findOne({ where: { email: email } });
				if (!user) {
					resolve({ status: false, message: 'Email not found' });
				} else {
					resolve({ status: true, message: 'Email has found', user });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllTourIdIsFlowingByUserId: async (userId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const listTourInfomation = await db.UserFlowTour.findAll({
					where: { userId: userId },
					attributes: ['userId', 'tourDepartureDayId'],
					include: [
						{
							model: db.TourDepartureDay,
							attributes: ['id', 'dayStartId', 'tourId', 'startPlace'],
							include: [
								{ model: db.DepartureDay, attributes: ['dayStart'] },
								{
									model: db.Tour,
									as: 'tourInfo',
									include: [
										{
											model: db.Category,
											as: 'categories',
											attributes: ['id', 'name', 'status'],
											through: {
												attributes: [],
											},
										},
										{
											model: db.Service,
											as: 'services',
											attributes: ['id', 'name', 'description', 'icon', 'status'],

											through: {
												attributes: [],
											},
										},
										{
											model: db.Promotion,
											as: 'promotions',
											attributes: ['id', 'name', 'promotion', 'forObject', 'status'],
											through: {
												attributes: [],
											},
										},
										{
											model: db.City,
											as: 'cityInfo',
											attributes: ['id', 'name'],
											include: [{ model: db.Country, as: 'countryInfo', attributes: ['id', 'name'] }],
										},
										{
											model: db.TourImage,
											as: 'images',
											attributes: ['id', 'imageName', 'imageLink'],
										},
									],
								},
							],
						},
					],
					nest: true,
					raw: false,
				});
				resolve({ status: true, message: 'Get all flowing tour successfully', listTourInfomation });
			} catch (error) {
				reject(error);
			}
		});
	},
	addNewFlowingTourByTourId: async (userId, tourDepartureDayId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isExist = await db.UserFlowTour.findOne({
					where: { userId: userId, tourDepartureDayId: tourDepartureDayId },
				});
				if (isExist) {
					return resolve({ status: false, message: 'This tour is already flowing' });
				}
				const isCreated = await db.UserFlowTour.create({ userId: userId, tourDepartureDayId: tourDepartureDayId });
				if (isCreated) {
					resolve({ status: true, message: 'Flowing successfully' });
				} else {
					resolve({ status: false, message: 'Flowing failed' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	deleteFlowingTourByTourId: async (userId, tourDepartureDayId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isDelete = await db.UserFlowTour.destroy({
					where: { userId: userId, tourDepartureDayId: tourDepartureDayId },
				});
				if (isDelete) {
					resolve({ status: true, message: 'Delete flowing successfully' });
				} else {
					resolve({ status: false, message: 'Delete flowing failed' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
};

export default userServices;
