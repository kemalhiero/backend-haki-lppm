'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pernyataanPengajuan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pernyataanPengajuan.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    suratPernyataanKetuaLppm: DataTypes.STRING,
    suratPernyataanHakCiptaPencipta: DataTypes.STRING,
    suratPengalihanHakCipta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pernyataanPengajuan',
  });
  return pernyataanPengajuan;
};