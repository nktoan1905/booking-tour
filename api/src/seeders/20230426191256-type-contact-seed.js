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
			'TypeContacts',
			[
				{
					name: 'Du lịch',
					status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
				},
        {
					name: 'Chăm sóc khách hàng',
					status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
				},
        {
					name: 'Liên hệ thông tin khác',
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
