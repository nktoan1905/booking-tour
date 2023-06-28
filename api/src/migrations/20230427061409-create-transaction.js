'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Transactions', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			userId: {
				type: Sequelize.INTEGER,
			},
			fullName: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
			},
			phoneNumber: {
				type: Sequelize.STRING,
			},
			address: {
				type: Sequelize.STRING,
			},
			adultQty: {
				type: Sequelize.INTEGER,
			},
			childQty: {
				type: Sequelize.INTEGER,
			},
			babyQty: {
				type: Sequelize.INTEGER,
			},
			tourDepartureDayId: {
				type: Sequelize.INTEGER,
			},
			paymentInfo: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Transactions');
	},
};
