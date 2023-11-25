'use strict';

const fs = require("fs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const supplierDatas = [];
    const payloads = JSON.parse(fs.readFileSync("./supplier-seeds.json"));

    payloads.map(payload => {
      supplierDatas.push({
        supplier_name: payload.supplier_name,
        supplier_address: payload.supplier_address
      })
    })

    await queryInterface.bulkInsert("tb_suppliers", supplierDatas, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tb_suppliers", null, {});
  }
};
