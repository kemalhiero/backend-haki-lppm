'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hakCiptaNonBukus', {
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
      idJenisCiptaan: {
        type: Sequelize.INTEGER,
        references: {
          model: 'subKategoriHakiNonBukus',
          key: 'id'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'CASCADE'
      },
      idSubJenisCiptaan: {
        type: Sequelize.INTEGER,
        references: {
          model: 'subSubKategoriHakiNonBukus',
          key: 'id'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'CASCADE'
      },
      tanggalDiumumkan: {
        type: Sequelize.DATE
      },
      kotaDiumumkan: {
        type: Sequelize.STRING
      },
      judulKegiatanRiset: {
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
    await queryInterface.dropTable('hakCiptaNonBukus');
  }
};