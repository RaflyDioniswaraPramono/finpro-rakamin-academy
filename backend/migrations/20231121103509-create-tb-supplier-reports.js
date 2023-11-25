'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_supplier_reports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      supplier_id: {
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER
      },
      product_amount: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_supplier_reports');
  }
};