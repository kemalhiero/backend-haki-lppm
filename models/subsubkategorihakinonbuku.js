'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subSubKategoriHakiNonBuku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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