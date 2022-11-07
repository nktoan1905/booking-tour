'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	/**
     * 	name: DataTypes.STRING,
		icon: DataTypes.STRING,
		content: DataTypes.STRING,
		status: DataTypes.INTEGER,
     */
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('TravelGuides', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			icon: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			content: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			status: {
				type: Sequelize.INTEGER,
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
		await queryInterface.dropTable('TravelGuides');
	},
};
