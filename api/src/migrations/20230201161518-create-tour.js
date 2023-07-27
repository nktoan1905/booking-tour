'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
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
			},
			thumbnail: {
				type: Sequelize.STRING,
			},
			thumbnailName: {
				type: Sequelize.STRING,
			},
			adultPrice: {
				type: Sequelize.DOUBLE,
			},
			childPrice: {
				type: Sequelize.DOUBLE,
			},
			babyPrice: {
				type: Sequelize.DOUBLE,
			},
			trailer: {
				type: Sequelize.TEXT,
			},
			tourDetail: {
				type: Sequelize.TEXT,
			},
			note: {
				type: Sequelize.TEXT,
			},
			map: {
				type: Sequelize.TEXT,
			},
			duration: {
				type: Sequelize.INTEGER,
			},
			amount: {
				type: Sequelize.INTEGER,
			},
			status: {
				type: Sequelize.BOOLEAN,
			},
			cityId: {
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
		await queryInterface.dropTable('Tours');
	},
};
