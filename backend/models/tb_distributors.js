'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_distributors extends Model {
    static associate(models) {
      // define association here
    }
  }
  tb_distributors.init({
    nama_distributor: DataTypes.STRING,
    alamat_distributor: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'tb_distributors',
    freezeTableName: true,
  });
  return tb_distributors;
};