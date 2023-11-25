'use strict';

const fs = require('fs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const distributorDatas = [];
    const payloads = JSON.parse(fs.readFileSync("./distributor-seeds.json"));

    payloads.map(payload => {
      distributorDatas.push({
        nama_distributor: payload.nama_distributor,
        alamat_distributor: payload.alamat_distributor
      })
    })

    await queryInterface.bulkInsert("tb_distributors", distributorDatas, {});
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete("tb_distributors", null, {});
  }
};
