'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_suppliers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },      
      supplier_name: {
        type: Sequelize.STRING
      },
      supplier_address: {
        type: Sequelize.STRING
      },      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_suppliers');
  }
};