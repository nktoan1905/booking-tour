'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Contacts', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			fullName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			phoneNumber: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			address: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			countCustomer: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			companyName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			content: {
				type: Sequelize.TEXT('long'),
				allowNull: false,
			},
			typeContact: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			status: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
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
		await queryInterface.dropTable('Contacts');
	},
};
