'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subSubKategoriHakiNonBuku extends Model {
    static associate(models) {
      this.belongsTo(models.hakCiptaNonBuku, {foreignKey: 'idSubJenisCiptaan'});
    }
  }
  subSubKategoriHakiNonBuku.init({
    idSubKategoriHaki: DataTypes.STRING,
    namaSubSubKategori: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'subSubKategoriHakiNonBuku',
  });
  return subSubKategoriHakiNonBuku;
};