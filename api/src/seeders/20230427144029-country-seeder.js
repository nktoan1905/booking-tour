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
					status: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},				{
					name: 'Thái Lan',
					status: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},				{
					name: 'Trung Quốc',
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
