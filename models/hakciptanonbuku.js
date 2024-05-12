'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class hakCiptaNonBuku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.pengajuan, {foreignKey: 'idPengajuan'});
      this.belongsTo(models.subKategoriHakiNonBuku, {foreignKey: 'idJenisCiptaan'});
      this.belongsTo(models.subSubKategoriHakiNonBuku, {foreignKey: 'idSubJenisCiptaan'});
    }
  }
  hakCiptaNonBuku.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    idPengajuan: DataTypes.UUID,
    idJenisCiptaan: DataTypes.INTEGER,
    idSubJenisCiptaan: DataTypes.INTEGER,
    tanggalDiumumkan: DataTypes.DATE,
    kotaDiumumkan: DataTypes.STRING,
    judulKegiatanRiset: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hakCiptaNonBuku',
  });
  return hakCiptaNonBuku;
};