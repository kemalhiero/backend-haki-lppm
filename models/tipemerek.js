'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipeMerek extends Model {
    static associate(models) {
      this.hasMany(models.merek, {foreignKey: 'idTipeMerek'});
    }
  }
  tipeMerek.init({
    namaMerek: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tipeMerek',
  });
  return tipeMerek;
};