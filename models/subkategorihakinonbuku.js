'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subKategoriHakiNonBuku extends Model {
    static associate(models) {
      this.belongsTo(models.hakCiptaNonBuku, {foreignKey: 'idJenisCiptaan'});
      this.hasMany(models.subSubKategoriHakiNonBuku, {foreignKey: 'idSubKategoriHaki'});
    }
  }
  subKategoriHakiNonBuku.init({
    namaSubKategori: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'subKategoriHakiNonBuku',
  });
  return subKategoriHakiNonBuku;
};