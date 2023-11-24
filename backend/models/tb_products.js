"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_products extends Model {
    static associate(models) {
      tb_products.belongsTo(models.tb_categories, {
        foreignKey: "category_id",
      });
    }
  }
  tb_products.init(
    {
      category_id: DataTypes.INTEGER,
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
