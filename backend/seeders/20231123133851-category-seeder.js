'use strict';

const fs = require("fs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const categoryDatas = [];
    const payloads = JSON.parse(fs.readFileSync("./category-seeds.json"));

    payloads.map(payload => {
      categoryDatas.push({
        category_name: payload.category_name
      })
    })

    await queryInterface.bulkInsert("tb_categories", categoryDatas, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tb_categories", null, {});
  }
};
