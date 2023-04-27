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
			'TourImages',
			[
				{
					imageName: '1',
					imageLink: 'https://media.travel.com.vn/Combo/img_1104202308a8ca46-e0d9-413f-aaf7-0eba25b4a0dc.jpg',
					tourId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageName: '2',
					imageLink: 'https://media.travel.com.vn/Combo/Slides/slide_img_240720209cd563c6-f612-4481-acd9-e3a94ff732c0.jpg',
					tourId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					imageName: '3',
					imageLink: 'https://media.travel.com.vn/Combo/Slides/slide_img_240720206b18cd69-4e7b-411c-9639-57e8ba80c0a4.jpg',
					tourId: 1,
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
