'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TourGuide extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TourGuide.init({
    employeeId: DataTypes.INTEGER,
    tourId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TourGuide',
  });
  return TourGuide;
};