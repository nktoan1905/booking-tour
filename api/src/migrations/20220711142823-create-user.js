'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		// fullName: DataTypes.STRING,
		// gender: DataTypes.BOOLEAN,
		// email: DataTypes.STRING,
		// password: DataTypes.STRING,
		// avatar: DataTypes.STRING,
		// imageName: DataTypes.STRING,
		// address: DataTypes.STRING,
		// phoneNumber: DataTypes.STRING,
		// dob: DataTypes.DATETIME,
		// roleId: DataTypes.INTEGER,
		await queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			fullName: {
				type: Sequelize.STRING,
			},
			gender: {
				type: Sequelize.BOOLEAN,
			},
			email: {
				type: Sequelize.STRING,
			},
			password: {
				type: Sequelize.STRING,
			},
			avatar: {
				type: Sequelize.STRING,
			},
			imageName: {
				type: Sequelize.STRING,
			},
			address: {
				type: Sequelize.STRING,
			},
			phoneNumber: {
				type: Sequelize.STRING,
			},
			dob: {
				type: Sequelize.DATE,
			},
			roleId: {
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
		await queryInterface.dropTable('Users');
	},
};
