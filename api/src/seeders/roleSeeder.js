'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Roles', [
			{
				name: 'Admin',
				description: 'Admin',
				status: 1,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: 'Employee',
				description: 'Employee',
				status: 1,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: 'New Member',
				description: 'Đây là Member',
				status: 1,
				created_at: new Date(),
				updated_at: new Date(),
			},

			{
				name: 'Sliver Member',
				description: 'Đây là Sliver Member',
				status: 1,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: 'Golden Member',
				description: 'Đây là Golden Member',
				status: 1,
				created_at: new Date(),
				updated_at: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {},
};
