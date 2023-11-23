'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_products.init({
    product_name: DataTypes.STRING,
    product_price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_products',
  });
  return tb_products;
};