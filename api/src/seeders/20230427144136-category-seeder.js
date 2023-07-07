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
					status: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Du lịch nước ngoài',
					status: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Du lịch sinh thái',
					status: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Du lịch sáng tạo',
					status: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tham quan',
					status: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bãi biển',
					status: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tình yêu',
					status: 1,
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
