'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Promotion extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Promotion.belongsToMany(models.Tour, {
				through: models.TourPromotion,
				foreignKey: 'promotionId',
			});
		}
	}
	Promotion.init(
		{
			name: DataTypes.STRING,
			promotion: DataTypes.INTEGER,
			status: DataTypes.BOOLEAN,
			forObject: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Promotion',
		},
	);
	return Promotion;
};
