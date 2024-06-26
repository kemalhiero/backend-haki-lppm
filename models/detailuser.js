'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detailUser extends Model {
    static associate(models) {
      this.belongsTo(models.user, {foreignKey: 'idUser'});
    }
  }
  detailUser.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    idUser: DataTypes.UUID,
    fakultas: DataTypes.STRING,
    kewarganegaraaan: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    kotaKab: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kelurahan: DataTypes.STRING,
    alamat: DataTypes.STRING,
    kodepos: DataTypes.STRING,
    nohp: DataTypes.STRING,
    pekerjaan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'detailUser',
  });
  return detailUser;
};