'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class TourImage extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			TourImage.belongsTo(models.Tour, { foreignKey: 'tourId' });
		}
	}
	TourImage.init(
		{
			imageLink: DataTypes.STRING,
			imageName: DataTypes.STRING,
			tourId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'TourImage',
		},
	);
	return TourImage;
};
