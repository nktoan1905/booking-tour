'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	/**
	 * 			car_name: DataTypes.STRING,
	 *      max_user: DataTypes.STRING,
	 */
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('refreshTokens', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			token: {
				type: Sequelize.STRING,
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
		await queryInterface.dropTable('refreshTokens');
	},
};
