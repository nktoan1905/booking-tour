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
			'Categories',
			[
				{
					name: 'Du lịch khám phá',
					status: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Du lịch nước ngoài',
					status: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Du lịch sinh thái',
					status: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Du lịch sáng tạo',
					status: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tham quan',
					status: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bãi biển',
					status: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tình yêu',
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
