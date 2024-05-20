'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class klaimDesainIndustri extends Model {
    static associate(models) {
      this.hasOne(models.desainIndustri, {foreignKey: 'idKlaim'});
    }
  }
  klaimDesainIndustri.init({
    namaKlaim: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'klaimDesainIndustri',
  });
  return klaimDesainIndustri;
};