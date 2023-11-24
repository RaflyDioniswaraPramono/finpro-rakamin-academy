"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_categories extends Model {
    static associate(models) {
      tb_categories.hasMany(models.tb_products);
    }
  }
  tb_categories.init(
    {
      category_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tb_categories",
      createdAt: false,
      updatedAt: false,
      freezeTableName: true,
    }
  );
  return tb_categories;
};
