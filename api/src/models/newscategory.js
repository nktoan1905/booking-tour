'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class NewsCategory extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			NewsCategory.hasMany(models.New, { foreignKey: 'categoryId', targetKey: 'id' });
		}
	}
	NewsCategory.init(
		{
			name: DataTypes.STRING,
			url: DataTypes.STRING,
			status: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: 'NewsCategory',
		},
	);
	return NewsCategory;
};
