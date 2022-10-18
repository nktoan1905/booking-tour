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
			username: {
				type: Sequelize.STRING,
				allowNull: false,
				validate: {
					len: [6, 20],
				},
				unique: true,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				validate: {
					len: [10, 50],
					isEmail: true,
				},
				unique: true,
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false,
				min: 6,
			},
			isAdmin: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
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
