'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.detailUser, {foreignKey: 'idUser'});
      this.belongsToMany(models.pengajuan, { through: 'detailPengajuan', foreignKey: 'idUser' });
    }
  }
  user.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.ENUM('superadmin', 'admin', 'user'),
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};