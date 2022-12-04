'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			User.belongsTo(models.Role, { foreignKey: 'roleId' });
		}
	}
	User.init(
		{
			// 1 male 2 female
			fullName: DataTypes.STRING,
			gender: DataTypes.BOOLEAN,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			imgLink: DataTypes.STRING,
			address: DataTypes.STRING,
			phoneNumber: DataTypes.STRING,
			dob: DataTypes.DATE,
			roleId: {
				type: DataTypes.INTEGER,
				references: {
					model: 'Role',
					key: 'id',
				},
				defaultValue: 3,
			},
		},
		{
			sequelize,
			modelName: 'User',
			timestamps: false,
		},
	);
	return User;
};
