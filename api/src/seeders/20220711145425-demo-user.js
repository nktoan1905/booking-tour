'use strict';
import { hashUserPassword } from '../helpers/hashUserPassword';
let hashPasswordFromBcrypt = await hashUserPassword('12345678');
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('Users', [
			{
				fullName: 'Admin',
				email: 'admin@gmail.com',
				password: hashPasswordFromBcrypt,
				roleId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
