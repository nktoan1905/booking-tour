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
		await queryInterface.bulkInsert('Users', [
			{
				fullName: 'Nguyễn Khánh Toàn',
				gender: 1,
				email: 'bookingtour1905@gmail.com',
				password: '$2b$10$o6qcV.2bXwQsYEKM01q17uOMjGh2rmWflxq2B/Xwum8arKRj3n0ri',
				avatar: 'https://png.pngtree.com/png-clipart/20210129/ourmid/pngtree-blue-default-avatar-png-image_2813123.jpg',
				address: '65, ngõ 38, phố Tư Đình, Long Biên, Hà Nội',
				phoneNumber: '0988791065',
				dob: '2000-05-19',
				roleId: 1,
				status: 1,
				isVerify: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				fullName: 'Nguyễn Khánh Toàn',
				gender: 1,
				email: 'nktoan1905@gmail.com',
				password: '$2b$10$o6qcV.2bXwQsYEKM01q17uOMjGh2rmWflxq2B/Xwum8arKRj3n0ri',
				avatar: 'https://png.pngtree.com/png-clipart/20210129/ourmid/pngtree-blue-default-avatar-png-image_2813123.jpg',
				address: '65, ngõ 38, phố Tư Đình, Long Biên, Hà Nội',
				phoneNumber: '0988791065',
				dob: '2000-05-19',
				roleId: 2,
				status: 1,
				isVerify: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				fullName: 'Nguyễn Khánh Toàn',
				gender: 1,
				email: 'ngtoan0165@gmail.com',
				password: '$2b$10$o6qcV.2bXwQsYEKM01q17uOMjGh2rmWflxq2B/Xwum8arKRj3n0ri',
				avatar: 'https://png.pngtree.com/png-clipart/20210129/ourmid/pngtree-blue-default-avatar-png-image_2813123.jpg',
				address: '65, ngõ 38, phố Tư Đình, Long Biên, Hà Nội',
				phoneNumber: '0988791065',
				dob: '2000-05-19',
				roleId: 3,
				status: 1,
				isVerify: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
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
