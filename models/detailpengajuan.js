'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detailPengajuan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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