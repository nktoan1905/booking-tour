'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Transaction extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Transaction.belongsTo(models.User, { foreignKey: 'userId' });
			Transaction.belongsTo(models.TourDepartureDay, { foreignKey: 'tourDepartureDayId' });
		}
	}
	Transaction.init(
		{
			userId: DataTypes.INTEGER,
			fullName: DataTypes.STRING,
			email: DataTypes.STRING,
			phoneNumber: DataTypes.STRING,
			address: DataTypes.STRING,
			adultQty: DataTypes.INTEGER,
			childQty: DataTypes.INTEGER,
			babyQty: DataTypes.INTEGER,
			paymentInfo: DataTypes.STRING,
			tourDepartureDayId: DataTypes.INTEGER,
			amountPaid: DataTypes.DOUBLE,
		},
		{
			sequelize,
			modelName: 'Transaction',
		},
	);
	return Transaction;
};
