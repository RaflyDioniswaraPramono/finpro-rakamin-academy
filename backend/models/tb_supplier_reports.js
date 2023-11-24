"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_supplier_reports extends Model {
    static associate(models) {
      // define association here
    }
  }
  tb_supplier_reports.init(
    {
      supplier_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      product_amount: DataTypes.INTEGER,
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "tb_supplier_reports",
      createdAt: false,
      updatedAt: false,
      freezeTableName: true,
    }
  );
  return tb_supplier_reports;
};
