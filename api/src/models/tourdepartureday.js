'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TourDepartureDay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TourDepartureDay.init({
    dayStartId: DataTypes.INTEGER,
    TourId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TourDepartureDay',
  });
  return TourDepartureDay;
};