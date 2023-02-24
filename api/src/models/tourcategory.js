'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class TourCategory extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			TourCategory.belongsTo(models.Tour, { foreignKey: 'tourId' });
			TourCategory.belongsTo(models.Category, { foreignKey: 'categoryId' });
		}
	}
	TourCategory.init(
		{
			categoryId: DataTypes.INTEGER,
			tourId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'TourCategory',
		},
	);
	return TourCategory;
};
