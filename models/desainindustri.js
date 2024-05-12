'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class desainIndustri extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.klaimDesainIndustri, {foreignKey: 'idKlaim'});
      this.belongsTo(models.locarnoClass, {foreignKey: 'idLocarnoClass'});
      this.belongsTo(models.pengajuan, {foreignKey: 'idPengajuan'});
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