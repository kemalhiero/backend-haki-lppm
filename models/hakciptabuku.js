'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hakCiptaBuku extends Model {
    static associate(models) {
      this.belongsTo(models.pengajuan, {foreignKey: 'idPengajuan'});
    }
  }
  hakCiptaBuku.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    idPengajuan: DataTypes.UUID,
    jenis: DataTypes.STRING,
    subJenis: DataTypes.STRING,
    tanggalDiumumkan: DataTypes.DATE,
    kotaDiumumkan: DataTypes.STRING,
    judulKegiatanRiset: DataTypes.STRING,
    sampulBuku: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hakCiptaBuku',
  });
  return hakCiptaBuku;
};