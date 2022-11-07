'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/*
            userId: DataTypes.INTEGER,
			tourId: DataTypes.INTEGER,
			amountOfAdult: DataTypes.INTEGER,
			amountOfChild: DataTypes.INTEGER,
			amountOfBaby: DataTypes.INTEGER,
			totalMoney: DataTypes.DOUBLE,
        */
		await queryInterface.createTable('Bills', {
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
			amountOfAdult: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			amountOfChild: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			amountOfBaby: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			totalMoney: {
				type: Sequelize.DOUBLE,
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
		await queryInterface.dropTable('Bills');
	},
};
