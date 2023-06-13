'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('NewsCategories', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert(
			'NewsCategories',
			[
				{
					status: 1,
					name: 'Tin tức du lịch',
					url:"tin-tuc-du-lich",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: 1,
					name: 'Cẩm nang du lịch',
					url:"cam-nang-du-lich",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					status: 1,
					name: 'Kinh nghiệm du lịch',
					url:"kinh-nghiem-du-lic",
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
