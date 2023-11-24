"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_categories extends Model {
    static associate(models) {
      // define association here
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
