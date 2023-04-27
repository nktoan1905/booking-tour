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
			// define association here
			
		}
	}
	UserFlowTour.init(
		{
			userId: {
				type: DataTypes.INTEGER,
				
			},
			tourId: {
				type: DataTypes.INTEGER,

			},
			dayStart: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: 'UserFlowTour',
		},
	);
	return UserFlowTour;
};
