'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class New extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			New.belongsTo(models.User, { as: 'userInfo', foreignKey: 'userId' });
		}
	}
	New.init(
		{
			title: DataTypes.STRING,
			content: DataTypes.STRING,
			userId: DataTypes.STRING,
			status: DataTypes.INTEGER,
			image: DataTypes.STRING,
			imageName: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'New',
		},
	);
	return New;
};
