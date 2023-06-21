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
				{ name: 'An Giang', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Bà Rịa-Vũng Tàu', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Bắc Giang', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Bắc Kạn', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Bạc Liêu', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Bắc Ninh', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Bến Tre', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Bình Định', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Bình Dương', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Bình Phước', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Bình Thuận', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Cà Mau', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Cần Thơ', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Cao Bằng', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Đà Nẵng', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Đắk Lắk', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Đắk Nông', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Điện Biên', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Đồng Nai', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Đồng Tháp', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Gia Lai', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Hà Giang', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Hà Nam', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Hà Nội', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Hà Tĩnh', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Hải Dương', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Hải Phòng', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Hậu Giang', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'TP. Hồ Chí Minh', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Hòa Bình', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Hưng Yên', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Khánh Hòa', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Kiên Giang', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Kon Tum', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Lai Châu', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Lâm Đồng', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Lạng Sơn', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Lào Cai', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Long An', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Nam Định', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Nghệ An', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Ninh Bình', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Ninh Thuận', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Phú Thọ', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Phú Yên', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Quảng Bình', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Quảng Nam', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Quảng Ngãi', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Quảng Ninh', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Quảng Trị', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Sóc Trăng', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Sơn La', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Tây Ninh', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Thái Bình', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Thái Nguyên', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Thanh Hóa', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Thừa Thiên - Huế', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Tiền Giang', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Trà Vinh', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Tuyên Quang', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Vĩnh Long', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Vĩnh Phúc', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
				{ name: 'Yên Bái', createdAt: new Date(), updatedAt: new Date(), countryId: 1, status: 1 },
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
