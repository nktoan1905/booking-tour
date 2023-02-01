'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Tour extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Tour.init(
		{
			name: DataTypes.STRING,
			thumbnail: DataTypes.STRING,
			thumbnailName: DataTypes.STRING,
			adultPrice: DataTypes.DOUBLE,
			childPrice: DataTypes.DOUBLE,
			babyPrice: DataTypes.DOUBLE,
			trailer: DataTypes.STRING,
			tourDetail: DataTypes.STRING,
			note: DataTypes.STRING,
			map: DataTypes.STRING,
			duration: DataTypes.INTEGER,
			amount: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Tour',
		},
	);
	return Tour;
};
