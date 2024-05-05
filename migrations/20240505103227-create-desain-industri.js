'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('desainIndustris', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
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
      idKlaim: {
        type: Sequelize.INTEGER,
        references: {
          model: 'klaimDesainIndustris',
          key: 'id'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'CASCADE'
      },
      idLocarnoClass: {
        type: Sequelize.INTEGER,
        references: {
          model: 'locarnoClasses',
          key: 'id'
        },
        onUpdate: 'NO ACTION',
        onDelete: 'CASCADE'
      },
      suratIzinUsaha: {
        type: Sequelize.STRING
      },
      suratKepemilikan: {
        type: Sequelize.STRING
      },
      gambarPerspektifDepan: {
        type: Sequelize.STRING
      },
      gambarPerspektifAtas: {
        type: Sequelize.STRING
      },
      gambarPerspektifBelakang: {
        type: Sequelize.STRING
      },
      gambarPerspektifbawah: {
        type: Sequelize.STRING
      },
      gambarPerspektifKiri: {
        type: Sequelize.STRING
      },
      gambarPerspektifKanan: {
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
    await queryInterface.dropTable('desainIndustris');
  }
};