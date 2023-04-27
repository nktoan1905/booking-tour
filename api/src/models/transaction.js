'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transaction.init({
    status: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    user_email: DataTypes.STRING,
    user_phone: DataTypes.STRING,
    amount: DataTypes.DOUBLE,
    payment: DataTypes.STRING,
    message: DataTypes.STRING,
    security: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};