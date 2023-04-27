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
			'Cities',
			[
				{
					name: 'Hà Nội',
					status: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
					countryId: 1,
				},
				{
					name: 'Đà Nẵng',
					status: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
					countryId: 1,
				},
				{
					name: 'Nha Trang',
					status: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
					countryId: 1,
				},
				{
					name: 'Tp Hồ Chí Minh',
					status: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
					countryId: 1,
				},
				{
					name: 'Nghệ An',
					status: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
					countryId: 1,
				},
				{
					name: 'Trùng Khánh',
					status: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
					countryId: 3,
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
