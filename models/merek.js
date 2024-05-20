'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class merek extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.pengajuan, {foreignKey: 'idPengajuan'});
      this.belongsTo(models.tipeMerek, {foreignKey: 'idTipeMerek'});
      this.belongsTo(models.tipePermohonan, {foreignKey: 'idTipePermohonan'});
      
    }
  }
  merek.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    idPengajuan: DataTypes.UUID,
    idTipePermohonan: DataTypes.UUID,
    idTipeMerek: DataTypes.UUID,
    unsurWarnaMerek: DataTypes.STRING,
    kelasMerek: DataTypes.STRING,
    uraianKelas: DataTypes.STRING,
    gambarMerek: DataTypes.STRING,
    suratPenyataanUmkm: DataTypes.STRING,
    suratRekomendasi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'merek',
  });
  return merek;
};