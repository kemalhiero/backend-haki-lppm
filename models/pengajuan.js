'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class pengajuan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.user, { through: 'detailPengajuan', foreignKey: 'idPengajuan' });

      this.hasOne(models.merek, {foreignKey: 'idPengajuan'});
      this.hasOne(models.desainIndustri, {foreignKey: 'idPengajuan'});
      this.hasOne(models.hakCiptaNonBuku, {foreignKey: 'idPengajuan'});
      this.hasOne(models.hakCiptaBuku, {foreignKey: 'idPengajuan'});
      this.hasOne(models.paten, {foreignKey: 'idPengajuan'});
    }
  }
  pengajuan.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    idPernyataanPengajuan: DataTypes.UUID,
    jenisHaki: DataTypes.ENUM,
    statusPengajuan: DataTypes.ENUM,
    judulKaryaHaki: DataTypes.STRING,
    deskripsi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pengajuan',
  });
  return pengajuan;
};