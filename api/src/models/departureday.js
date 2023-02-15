'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DepartureDay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DepartureDay.init({
    dayStart: DataTypes.DATEONLY,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'DepartureDay',
  });
  return DepartureDay;
};