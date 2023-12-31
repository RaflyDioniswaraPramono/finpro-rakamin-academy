'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_admins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      nama: {
        type: Sequelize.STRING
      },
      profil: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_admins');
  }
};