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
			'Countries',
			[
				{
					name: 'Việt Nam',
					status: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thái Lan',
					status: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Trung Quốc',
					status: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Pháp',
					status: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Úc',
					status: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Anh',
					status: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Nhật Bản',
					status: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Singapore',
					status: true,
					createdAt: new Date(),
					updatedAt: new Date(),
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
