'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	/**
			name: DataTypes.STRING,
			thumbnail: DataTypes.STRING,
			thumbnailName: DataTypes.STRING,
			adult_price: DataTypes.DECIMAL,
			child_price: DataTypes.DECIMAL,
			baby_price: DataTypes.DECIMAL,
			trailerLink: DataTypes.STRING,
			tourDetail: DataTypes.STRING,
			note: DataTypes.STRING,
			mapLink: DataTypes.STRING,
			time: DataTypes.STRING,
			amount: DataTypes.INTEGER,
     */
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Tours', {
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
			thumbnail: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			thumbnailName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			adult_price: {
				type: Sequelize.DECIMAL,
				allowNull: false,
			},
			child_price: {
				type: Sequelize.DECIMAL,
				allowNull: false,
			},
			baby_price: {
				type: Sequelize.DECIMAL,
				allowNull: false,
			},
			trailerLink: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			tourDetail: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			note: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			mapLink: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			time: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			amount: {
				type: Sequelize.STRING,
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
		await queryInterface.dropTable('Tours');
	},
};
