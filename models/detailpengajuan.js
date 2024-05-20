'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detailPengajuan extends Model {
    static associate(models) {
      // define association here
    }
  }
  detailPengajuan.init({
    idPengajuan: DataTypes.UUID,
    idUser: DataTypes.UUID,
    keterangan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'detailPengajuan',
  });
  return detailPengajuan;
};