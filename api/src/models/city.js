'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class City extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			City.belongsTo(models.Country, { foreignKey: 'countryId', as: 'countryInfo' });
		}
	}
	City.init(
		{
			name: DataTypes.STRING,
			status: DataTypes.BOOLEAN,
			countryId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'City',
		},
	);
	return City;
};
