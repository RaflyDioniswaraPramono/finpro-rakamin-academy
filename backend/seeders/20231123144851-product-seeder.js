'use strict';

const fs = require("fs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const productDatas = [];
    const payloads = JSON.parse(fs.readFileSync("./product-seeds.json"));

    payloads.map((payload => {
      productDatas.push({
        category_id: payload.category_id,
        supplier_id: payload.supplier_id,
        product_name: payload.product_name,
        product_price: payload.product_price
      })
    }))

    await queryInterface.bulkInsert("tb_products", productDatas, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tb_products", null, {});
  }
};
