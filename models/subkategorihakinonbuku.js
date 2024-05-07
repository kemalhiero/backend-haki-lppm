'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subKategoriHakiNonBuku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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