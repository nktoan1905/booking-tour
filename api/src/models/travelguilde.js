'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class TravelGuilde extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			TravelGuilde.belongsTo(models.User, { foreignKey: 'createdBy' });
		}
	}
	TravelGuilde.init(
		{
			titile: DataTypes.STRING,
			content: DataTypes.STRING,
			status: DataTypes.INTEGER,
			createdBy: DataTypes.INTEGER,
			updatedBy: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'TravelGuilde',
		},
	);
	return TravelGuilde;
};
