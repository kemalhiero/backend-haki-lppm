'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class desainIndustri extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.klaimDesainIndustri, {foreignKey: 'idKlaim'});
      this.hasOne(models.locarnoClass, {foreignKey: 'idLocarnoClass'});
    }
  }
  desainIndustri.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    idPengajuan: DataTypes.UUID,
    idKlaim: DataTypes.INTEGER,
    idLocarnoClass: DataTypes.INTEGER,
    suratIzinUsaha: DataTypes.STRING,
    suratKepemilikan: DataTypes.STRING,
    gambarPerspektifDepan: DataTypes.STRING,
    gambarPerspektifAtas: DataTypes.STRING,
    gambarPerspektifBelakang: DataTypes.STRING,
    gambarPerspektifbawah: DataTypes.STRING,
    gambarPerspektifKiri: DataTypes.STRING,
    gambarPerspektifKanan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'desainIndustri',
  });
  return desainIndustri;
};