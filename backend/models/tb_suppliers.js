"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_suppliers extends Model {
    static associate(models) {
      tb_suppliers.hasMany(models.tb_products);
    }
  }
  tb_suppliers.init(
    {      
      supplier_name: DataTypes.STRING,
      supplier_address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tb_suppliers",
      createdAt: false,
      updatedAt: false,
      freezeTableName: true,
    }
  );
  return tb_suppliers;
};
