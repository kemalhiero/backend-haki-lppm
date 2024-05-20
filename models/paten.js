'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class paten extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.pengajuan, {foreignKey: 'idPengajuan'});
    }
  }
  paten.init({
    idPengajuan: DataTypes.UUID,
    jumlahKlaim: DataTypes.INTEGER,
    deskripsiPaten: DataTypes.STRING,
    abstrakDenganJudulPaten: DataTypes.STRING,
    klaim: DataTypes.STRING,
    gambarPaten: DataTypes.STRING,
    gambarUntukPublikasi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'paten',
  });
  return paten;
};