'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('patens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPengajuan: {
        type: Sequelize.UUID,
        references: {
          model: 'pengajuans',
          key: 'id'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'CASCADE'
      },
      jumlahKlaim: {
        type: Sequelize.INTEGER
      },
      deskripsiPaten: {
        type: Sequelize.STRING
      },
      abstrakDenganJudulPaten: {
        type: Sequelize.STRING
      },
      klaim: {
        type: Sequelize.STRING
      },
      gambarPaten: {
        type: Sequelize.STRING
      },
      gambarUntukPublikasi: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('patens');
  }
};