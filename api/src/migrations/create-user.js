'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	/**
	 * 
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			fullName: DataTypes.STRING,
			gender: DataTypes.BOOLEAN,
			avatar: DataTypes.STRING,
			image_name: DataTypes.STRING,
			address: DataTypes.STRING,
			phoneNumber: DataTypes.STRING,
			isAdmin: DataTypes.INTEGER, 
	 */
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			fullName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			gender: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			avatar: {
				type: Sequelize.STRING,
			},
			image_name: {
				type: Sequelize.STRING,
			},
			address: {
				type: Sequelize.STRING,
			},
			phoneNumber: {
				type: Sequelize.STRING,
			},
			roleId: {
				type: Sequelize.INTEGER,
				defaultValue: 1,
				references: {
					model: 'Roles',
					key: 'id',
				},
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
