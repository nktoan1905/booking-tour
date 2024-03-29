'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('TourCategories', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			categoryId: {
				type: Sequelize.INTEGER,
			},
			tourId: {
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
		await queryInterface.addConstraint('TourCategories', {
			fields: ['categoryId', 'tourId'],
			type: 'unique',
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('TourCategories');
	},
};
