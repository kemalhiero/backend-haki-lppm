'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hakCiptaBuku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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