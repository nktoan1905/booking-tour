'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Tour extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 * */
		static associate(models) {
			// define association here
			Tour.belongsToMany(models.Category, {
				through: models.TourCategory,
				as: 'categories',
				foreignKey: 'tourId',
				onDelete: 'CASCADE',
			});
			Tour.hasMany(models.TourCategory, { foreignKey: 'tourId', targetKey: 'id' });
			Tour.belongsToMany(models.City, { through: models.TourCity, as: 'cities', foreignKey: 'tourId' });
			Tour.belongsToMany(models.DepartureDay, {
				through: models.TourDepartureDay,
				as: 'departureDays',
				foreignKey: 'tourId',
			});
			Tour.hasMany(models.TourDepartureDay, {
				foreignKey: 'tourId',
				targetKey: 'id',
			});
			Tour.belongsToMany(models.Service, { through: models.TourService, as: 'services', foreignKey: 'tourId' });
			Tour.belongsToMany(models.Promotion, { through: models.TourPromotion, as: 'promotions', foreignKey: 'tourId' });
			Tour.belongsToMany(models.User, {
				through: models.TourGuide,
				foreignKey: 'tourId',
				as: 'tourGuide',
			});
			Tour.hasMany(models.TourImage, { foreignKey: 'tourId', as: 'images', targetKey: 'id' });
			Tour.belongsToMany(models.User, { through: models.UserFlowTour, foreignKey: 'tourId', targetKey: 'id' });

			Tour.hasMany(models.Comment, { foreignKey: 'tourId', targetKey: 'id', as: 'listComments' });
			Tour.hasMany(models.Feedback, { foreignKey: 'tourId', targetKey: 'id', as: 'listFeedbacks' });
		}
	}
	Tour.init(
		{
			name: DataTypes.STRING,
			thumbnail: DataTypes.STRING,
			thumbnailName: DataTypes.STRING,
			adultPrice: DataTypes.DOUBLE,
			childPrice: DataTypes.DOUBLE,
			babyPrice: DataTypes.DOUBLE,
			trailer: DataTypes.STRING,
			tourDetail: DataTypes.STRING,
			note: DataTypes.STRING,
			map: DataTypes.STRING,
			duration: DataTypes.INTEGER,
			amount: DataTypes.INTEGER,
			endPlace: DataTypes.STRING,
			status: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: 'Tour',
		},
	);
	return Tour;
};
