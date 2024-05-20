'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pengajuan extends Model {
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
    jenisHaki: DataTypes.ENUM('merek', 'desain-industri', 'hak-cipta-non-buku', 'hak-cipta-buku', 'paten'),
    statusPengajuan: DataTypes.ENUM('diperiksa', 'ditolak', 'diproses-djki', 'sudah-bayar', 'disetujui'),
    judulKaryaHaki: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    suratPernyataanKetuaLppm: DataTypes.STRING,
    suratPernyataanHakCiptaPencipta: DataTypes.STRING,
    suratPengalihanHakCipta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pengajuan',
  });
  return pengajuan;
};