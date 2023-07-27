'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Roles', [
			{
				name: 'Admin',
				description: 'Admin',
				status: true,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Employee',
				description: 'Employee',
				status: true,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'New Member',
				description: 'Đây là Member',
				status: true,
				createdAt: new Date(),
				updatedAt: new Date(),
			},

			{
				name: 'Sliver Member',
				description: 'Đây là Sliver Member',
				status: true,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Golden Member',
				description: 'Đây là Golden Member',
				status: true,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {},
};
