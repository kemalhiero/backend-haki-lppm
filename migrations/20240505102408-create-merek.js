'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mereks', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
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
      idTipePermohonan: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tipePermohonans',
          key: 'id'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'CASCADE'
      },
      idTipeMerek: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tipeMereks',
          key: 'id'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'CASCADE'
      },
      unsurWarnaMerek: {
        type: Sequelize.STRING
      },
      kelasMerek: {
        type: Sequelize.STRING
      },
      uraianKelas: {
        type: Sequelize.STRING
      },
      gambarMerek: {
        type: Sequelize.STRING
      },
      suratPenyataanUmkm: {
        type: Sequelize.STRING
      },
      suratRekomendasi: {
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
    await queryInterface.dropTable('mereks');
  }
};