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
			adult_price: DataTypes.DECIMAL,
			child_price: DataTypes.DECIMAL,
			baby_price: DataTypes.DECIMAL,
			trailerLink: DataTypes.STRING,
			tourDetail: DataTypes.STRING,
			note: DataTypes.STRING,
			mapLink: DataTypes.STRING,
			time: DataTypes.STRING,
			amount: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Tour',
		},
	);
	return Tour;
};
