import db from '../models/index';
import bcrypt from 'bcrypt';
import schema from '../helpers/validation';
import { Op } from 'sequelize';
import UserRole from '../helpers/roleConst';
import Status from '../helpers/statusConst';
import UserHelpers from '../helpers/userHelper';

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
					],
				});
				if (!members) {
					resolve({
						status: false,
						message: 'No members were found!',
					});
				} else {
					resolve({
						status: true,
						message: 'Get all members successfully!',
						members,
					});
				}
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
					],
				});
				if (!employees) {
					resolve({
						status: false,
						message: 'No employees were found!',
					});
				} else {
					resolve({
						status: true,
						message: 'Get all employees successfully!',
						employees,
					});
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllAdmins: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const admins = await db.User.findAll({
					where: { roleId: UserRole.Admin },
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
					],
				});
				if (!admins) {
					resolve({
						status: false,
						message: 'No admins were found!',
					});
				} else {
					resolve({
						status: true,
						message: 'Get all admins successfully!',
						admins,
					});
				}
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
					attributes: [
						'fullName',
						'gender',
						'email',
						'avatar',
						'address',
						'phoneNumber',
						'dob',
						'status',
					],
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
				console.log(error);
				reject(error);
			}
		});
	},
	createEmployee: async (data) => {
		return new Promise(async (resolve, reject) => {
			let emailIsExist = await db.User.findOne({
				where: { email: data.email },
			});
			if (emailIsExist) {
				return resolve({
					status: false,
					statusMessage: 'Email was already exsit.',
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
			resolve({
				status: true,
				message: 'Create new employee successfully!',
			});
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
					},
					{ where: { id: id } },
				);
				const newUserInfo = await db.User.findOne({
					where: { id: id },
					attributes: ['fullName', 'gender', 'avatar', 'phoneNumber', 'address', 'dob'],
				});
				if (isUpdate) {
					resolve({ status: true, message: 'Update was successful', newUserInfo });
				} else {
					resolve({ status: false, message: 'Update failed' });
				}
			} catch (error) {
				console.log(error);
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
						message: 'Id dose not exist',
					});
				}
				let user = checkIdExist;
				if (user.status === Status.ACTIVE) {
					let isUpdate = await db.User.update({ status: Status.DELETE }, { where: { id: id } });
					if (isUpdate) {
						resolve({ status: true, message: 'Update active status to delete status successfully!' });
					} else {
						resolve({ status: false, message: 'Update status failed.' });
					}
				} else {
					let isUpdate = await db.User.update({ status: Status.ACTIVE }, { where: { id: id } });
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
	updateMemberRole: async (id, data) => {
		return new Promise(async (resolve, reject) => {
			try {
				const user = await db.User.findOne({ where: { id: id } });
				if (!user) {
					resolve({ status: false, message: 'This user does not exist.' });
				}
				const check = UserHelpers.checkIsMember(user);
				if (!check) {
					resolve({ status: false, message: 'This user is not a member.' });
				} else {
					let isUpdate = await db.User.update({ roleId: data.roleId }, { where: { id: id } });
					if (isUpdate) {
						resolve({ status: true, message: 'Update role is successfully' });
					} else {
						resolve({ status: false, message: 'Update role failed' });
					}
				}
			} catch (error) {
				console.log(error);
				reject(error);
			}
		});
	},
	deleteMemberById: async (id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isDelete = await db.User.destroy({ where: { id: id } });
				if (isDelete) {
					resolve({ status: true, message: 'Delete member successfully!' });
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
				const isDelete = await db.User.destroy({ where: { id: id } });
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
};

export default userServices;
