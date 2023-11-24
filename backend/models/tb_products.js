"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_products extends Model {
    static associate(models) {
      // define association here
    }
  }
  tb_products.init(
    {
      product_name: DataTypes.STRING,
      product_price: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tb_products",
      createdAt: false,
      updatedAt: false,
      freezeTableName: true,
    }
  );
  return tb_products;
};
