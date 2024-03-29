'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Service extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Service.belongsToMany(models.Tour, { through: models.TourService, as: 'tours', foreignKey: 'serviceId' });
		}
	}
	Service.init(
		{
			name: DataTypes.STRING,
			description: DataTypes.STRING,
			icon: DataTypes.STRING,
			loadhome: DataTypes.BOOLEAN,
			status: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: 'Service',
		},
	);
	return Service;
};
