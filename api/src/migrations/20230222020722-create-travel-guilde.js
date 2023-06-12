'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('TravelGuildes', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			titile: {
				type: Sequelize.STRING,
			},
			thumnail: {
				type: Sequelize.STRING,
			},
			thumnailName: {
				type: Sequelize.STRING,
			},
			content: {
				type: Sequelize.TEXT('long'),
			},
			status: {
				type: Sequelize.INTEGER,
			},
			createdBy: {
				type: Sequelize.INTEGER,
			},
			updatedBy: {
				type: Sequelize.INTEGER,
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
		await queryInterface.dropTable('TravelGuildes');
	},
};
