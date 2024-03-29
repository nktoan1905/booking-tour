'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Category extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Category.belongsToMany(models.Tour, { through: models.TourCategory, as: 'tours', foreignKey: 'categoryId' });
			Category.hasMany(models.TourCategory, { foreignKey: 'categoryId', targetKey:'id'});
		}
	}
	Category.init(
		{
			name: DataTypes.STRING,
			status: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: 'Category',
		},
	);
	return Category;
};
