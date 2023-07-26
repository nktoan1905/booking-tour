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
			New.belongsTo(models.NewsCategory, { foreignKey: 'categoryId', as: 'type' });
		}
	}
	New.init(
		{
			title: DataTypes.STRING,
			content: DataTypes.STRING,
			userId: DataTypes.INTEGER,
			status: DataTypes.BOOLEAN,
			image: DataTypes.STRING,
			imageName: DataTypes.STRING,
			categoryId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'New',
		},
	);
	return New;
};
