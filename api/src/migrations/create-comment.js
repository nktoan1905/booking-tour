'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/*
			userId: DataTypes.INTEGER,
			tourId: DataTypes.INTEGER,
			content: DataTypes.STRING,
			star: DataTypes.DOUBLE,
			status: DataTypes.BOOLEAN,
        */
		await queryInterface.createTable('Comments', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			userId: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			tourId: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			content: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			star: {
				type: Sequelize.DOUBLE,
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
		await queryInterface.dropTable('Comments');
	},
};
