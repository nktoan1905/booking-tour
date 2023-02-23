'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Users', {
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
			gender: {
				type: Sequelize.BOOLEAN,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			avatar: {
				type: Sequelize.STRING,
			},
			address: {
				type: Sequelize.STRING,
			},
			phoneNumber: {
				type: Sequelize.STRING,
			},
			dob: {
				type: Sequelize.STRING,
			},
			roleId: {
				type: Sequelize.INTEGER,
			},
			status: {
				type: Sequelize.BOOLEAN,
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
		await queryInterface.dropTable('Users');
	},
};
