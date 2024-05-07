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
      suratPernyataanKetuaLppm: {
        type: Sequelize.STRING
      },
      suratPernyataanHakCiptaPencipta: {
        type: Sequelize.STRING
      },
      suratPengalihanHakCipta: {
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