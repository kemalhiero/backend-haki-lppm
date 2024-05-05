'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pengajuans', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      idPernyataanPengajuan: {
        type: Sequelize.UUID,
        references: {
          model: 'pernyataanPengajuans',
          key: 'id'
        },
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE'
      },
      jenisHaki: {
        type: Sequelize.ENUM('merek', 'desain-industri', 'hak-cipta-non-buku', 'hak-cipta-buku', 'paten')
      },
      statusPengajuan: {
        type: Sequelize.ENUM('diperiksa', 'ditolak', 'diproses-djki', 'sudah-bayar', 'disetujui')
      },
      judulKaryaHaki: {
        type: Sequelize.STRING
      },
      deskripsi: {
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
    await queryInterface.dropTable('pengajuans');
  }
};