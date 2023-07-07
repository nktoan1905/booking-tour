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
			TourDepartureDay.belongsTo(models.Tour, { foreignKey: 'tourId', as: 'tourInfo' });
			TourDepartureDay.hasMany(models.Transaction, {
				foreignKey: 'tourDepartureDayId',
				targetKey: 'id',
				as: 'transactions',
			});
			TourDepartureDay.belongsToMany(models.User, {
				through: models.UserFlowTour,
				foreignKey: 'tourDepartureDayId',
				targetKey: 'id',
			});
			TourDepartureDay.hasMany(models.UserFlowTour, {
				foreignKey: 'tourDepartureDayId',
				targetKey: 'id',
			});
		}
	}
	TourDepartureDay.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
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
