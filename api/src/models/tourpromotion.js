'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TourPromotion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TourPromotion.init({
    tourId: DataTypes.INTEGER,
    promotionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TourPromotion',
  });
  return TourPromotion;
};