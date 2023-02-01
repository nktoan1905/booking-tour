'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TourImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TourImage.init({
    imageId: DataTypes.INTEGER,
    tourId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TourImage',
  });
  return TourImage;
};