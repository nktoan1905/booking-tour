'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class TourAttraction extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	TourAttraction.init(
		{
			tourId: DataTypes.INTEGER,
			cityId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'TourAttraction',
		},
	);
	return TourAttraction;
};
