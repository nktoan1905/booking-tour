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
				gender: true,
				email: 'bookingtour1905@gmail.com',
				password: '$2b$10$o6qcV.2bXwQsYEKM01q17uOMjGh2rmWflxq2B/Xwum8arKRj3n0ri',
				address: '65, ngõ 38, phố Tư Đình, Long Biên, Hà Nội',
				phoneNumber: '0988791065',
				dob: '2000-05-19',
				roleId: 1,
				status: true,
				
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				fullName: 'Nguyễn Khánh Toàn',
				gender: true,
				email: 'nktoan1905@gmail.com',
				password: '$2b$10$o6qcV.2bXwQsYEKM01q17uOMjGh2rmWflxq2B/Xwum8arKRj3n0ri',
				address: '65, ngõ 38, phố Tư Đình, Long Biên, Hà Nội',
				phoneNumber: '0988791065',
				dob: '2000-05-19',
				roleId: 2,
				status: true,
				
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				fullName: 'Nguyễn Khánh Toàn',
				gender: true,
				email: 'ngtoan0165@gmail.com',
				password: '$2b$10$o6qcV.2bXwQsYEKM01q17uOMjGh2rmWflxq2B/Xwum8arKRj3n0ri',
				address: '65, ngõ 38, phố Tư Đình, Long Biên, Hà Nội',
				phoneNumber: '0988791065',
				dob: '2000-05-19',
				roleId: 3,
				status: true,
				
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
