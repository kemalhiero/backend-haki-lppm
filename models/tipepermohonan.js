'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipePermohonan extends Model {
    static associate(models) {
      this.hasMany(models.merek, {foreignKey: 'idTipeMerek'});
    }
  }
  tipePermohonan.init({
    namaPermohonan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tipePermohonan',
  });
  return tipePermohonan;
};