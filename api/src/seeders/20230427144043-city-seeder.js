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
				{ name: 'An Giang', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Bà Rịa-Vũng Tàu', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Bắc Giang', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Bắc Kạn', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Bạc Liêu', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Bắc Ninh', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Bến Tre', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Bình Định', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Bình Dương', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Bình Phước', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Bình Thuận', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Cà Mau', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Cần Thơ', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Cao Bằng', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Đà Nẵng', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Đắk Lắk', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Đắk Nông', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Điện Biên', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Đồng Nai', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Đồng Tháp', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Gia Lai', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Hà Giang', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Hà Nam', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Hà Nội', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Hà Tĩnh', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Hải Dương', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Hải Phòng', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Hậu Giang', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'TP. Hồ Chí Minh', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Hòa Bình', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Hưng Yên', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Khánh Hòa', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Kiên Giang', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Kon Tum', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Lai Châu', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Lâm Đồng', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Lạng Sơn', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Lào Cai', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Long An', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Nam Định', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Nghệ An', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Ninh Bình', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Ninh Thuận', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Phú Thọ', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Phú Yên', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Quảng Bình', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Quảng Nam', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Quảng Ngãi', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Quảng Ninh', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Quảng Trị', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Sóc Trăng', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Sơn La', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Tây Ninh', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Thái Bình', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Thái Nguyên', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Thanh Hóa', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Thừa Thiên - Huế', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Tiền Giang', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Trà Vinh', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Tuyên Quang', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Vĩnh Long', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Vĩnh Phúc', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
				{ name: 'Yên Bái', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: true },
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
