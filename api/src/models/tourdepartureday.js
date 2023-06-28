'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class TourDepartureDay extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			TourDepartureDay.belongsTo(models.DepartureDay, { foreignKey: 'dayStartId' });
			TourDepartureDay.belongsTo(models.Tour, { foreignKey: 'tourId' });
			TourDepartureDay.hasMany(models.Transaction, {
				foreignKey: 'tourDepartureDayId',
				as: 'orderInfo',
				targetKey: 'id',
			});
		}
	}
	TourDepartureDay.init(
		{
			dayStartId: DataTypes.INTEGER,
			tourId: DataTypes.INTEGER,
			startPlace: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'TourDepartureDay',
		},
	);
	return TourDepartureDay;
};
