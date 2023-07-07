'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Services', [
			{
				name: 'Cafe',
				description: 'Cà phê được miễn phí 2 tách một ngày',
				icon: 'fas fa-coffee',
				loadhome: 1,
				status: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Ăn sáng',
				description: 'Khách hàng được thưởng thức bữa sáng miễn phí ',
				icon: 'fas fa-egg',
				loadhome: 1,
				status: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Đạp xe',
				description: 'Được cấp xe đạp ở từng địa điểm nhất định',
				icon: 'fas fa-bicycle',
				loadhome: 1,
				status: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Thiết bị',
				description: 'Được cung cấp thiết bị cần thiết theo loại tour',
				icon: 'fas fa-coffee',
				loadhome: 1,
				status: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Di chuyển',
				description: 'Được cung cấp miễn phí dịch vụ di chuyển khi đi theo đoàn',
				icon: 'fas fa-bus-alt',
				loadhome: 1,
				status: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Nước mía siêu sạch',
				description: 'Được phục vụ nước mía free',
				icon: 'fab fa-pagelines',
				loadhome: 0,
				status: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Chụp ảnh',
				description: 'Được thợ chụp ảnh chuyên nghiệp chụp hình kỷ niệm',
				icon: 'fas fa-camera',
				loadhome: 1,
				status: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {},
};
