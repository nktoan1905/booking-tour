'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert(
			'Roles',
			[
				{
					name: 'Admin',
					description: 'Đây là Admin',
					status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
				},
				{
					name: 'Nhân viên',
					description: 'Đây là Nhân Viên',
					status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
				},
				{
					name: 'Member',
					description: 'Đây là Member',
					status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
				},
				{
					name: 'Golden Member',
					description: 'Đây là Golden Member',
					status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
				},
			],
			{},
		);
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
