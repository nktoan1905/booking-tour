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
		 *
		 */
		await queryInterface.bulkInsert(
			'Promotions',
			[
				{
					name: 'Giảm 15% cho admin',
					promotion: 15,
					status: true,
					forObject: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Giảm 10% cho Employee',
					promotion: 15,
					status: true,
					forObject: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Giảm 5% cho Golden Member',
					promotion: 15,
					status: true,
					forObject: 5,
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
