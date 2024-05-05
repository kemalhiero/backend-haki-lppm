'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hakCiptaBukus', {
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
      jenis: {
        type: Sequelize.STRING
      },
      subJenis: {
        type: Sequelize.STRING
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
      sampulBuku: {
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
    await queryInterface.dropTable('hakCiptaBukus');
  }
};