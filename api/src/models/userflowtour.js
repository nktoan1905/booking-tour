'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class UserFlowTour extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association
			UserFlowTour.belongsTo(models.TourDepartureDay, { foreignKey: 'tourDepartureDayId' });
		}
	}
	UserFlowTour.init(
		{
			userId: {
				type: DataTypes.INTEGER,
			},
			tourDepartureDayId: {
				type: DataTypes.INTEGER,
			},
		},
		{
			sequelize,
			modelName: 'UserFlowTour',
		},
	);
	return UserFlowTour;
};
