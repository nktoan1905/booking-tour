'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Feedback extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Feedback.belongsTo(models.User, { foreignKey: 'userId' });
			Feedback.belongsTo(models.Tour, { foreignKey: 'tourId' });
		}
	}
	Feedback.init(
		{
			userId: DataTypes.INTEGER,
			tourId: DataTypes.INTEGER,
			content: DataTypes.TEXT,
			star: DataTypes.INTEGER,
			loadhome: DataTypes.BOOLEAN,
			status: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Feedback',
		},
	);
	return Feedback;
};
