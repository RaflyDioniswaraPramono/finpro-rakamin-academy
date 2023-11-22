'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_distributor_reports extends Model {
    static associate(models) {
      // define association here
    }
  }
  tb_distributor_reports.init({
    distributor_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    product_amount: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'tb_distributor_reports',
  });
  return tb_distributor_reports;
};