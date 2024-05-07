'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipePermohonan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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