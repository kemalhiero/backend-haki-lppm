'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tokenSession extends Model {
    static associate(models) {
      this.belongsTo(models.user, {foreignKey: 'idUser'});
    }
  }
  tokenSession.init({
    idUser: DataTypes.UUID,
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tokenSession',
  });
  return tokenSession;
};