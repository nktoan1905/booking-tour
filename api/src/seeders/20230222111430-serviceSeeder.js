'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Services', [
			{
				name: 'Cafe',
				description: 'Cà phê được miễn phí 2 tách một ngày',
				icon: 'fas fa-coffee',
				status: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Ăn sáng',
				description: 'Khách hàng được thưởng thức bữa sáng miễn phí ',
				icon: 'fas fa-egg',
				status: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Đạp xe',
				description: 'Được cấp xe đạp ở từng địa điểm nhất định',
				icon: 'fas fa-bicycle',
				status: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Thiết bị',
				description: 'Được cung cấp thiết bị cần thiết theo loại tour',
				icon: 'fas fa-coffee',
				status: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			
		]);
	},

	async down(queryInterface, Sequelize) {},
};
