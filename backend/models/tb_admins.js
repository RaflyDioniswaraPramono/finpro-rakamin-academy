"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_admins extends Model {
    static associate(models) {
      // define association here
    }
  }

  tb_admins.init(
    {
      email: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      nama: DataTypes.STRING,
      profil: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tb_admins",
      createdAt: false,
      updatedAt: false,
      freezeTableName: true,
    }
  );
  return tb_admins;
};
