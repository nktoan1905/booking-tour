'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			User.hasMany(models.New, { foreignKey: 'userId', targetKey: 'id' });
			User.belongsTo(models.Role, { foreignKey: 'roleId', as: 'roleInfo' });
			User.belongsToMany(models.Tour, {
				through: models.TourGuide,
				foreignKey: 'employeeId',
				targetKey: 'id',
				as: 'tours',
			});
			User.belongsToMany(models.TourDepartureDay, {
				through: models.UserFlowTour,
				foreignKey: 'userId',
				targetKey: 'id',
			});

			User.hasMany(models.Comment, { foreignKey: 'userId', targetKey: 'id' });
			User.hasMany(models.Reply, { foreignKey: 'userId', targetKey: 'id' });
			User.hasMany(models.Transaction, { foreignKey: 'userId', targetKey: 'id', as: 'orders' });
			User.hasMany(models.Feedback, { foreignKey: 'userId', targetKey: 'id', as: 'feedbacks' });
		}
	}
	User.init(
		{
			fullName: DataTypes.STRING,
			gender: DataTypes.BOOLEAN,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			avatar: DataTypes.STRING,
			address: DataTypes.STRING,
			phoneNumber: DataTypes.STRING,
			dob: DataTypes.STRING,
			roleId: DataTypes.INTEGER,
			status: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: 'User',
		},
	);
	return User;
};
