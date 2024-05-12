'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class locarnoClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.desainIndustri, {foreignKey: 'idLocarnoClass'});
    }
  }
  locarnoClass.init({
    namaLC: DataTypes.STRING  //locarno class
  }, {
    sequelize,
    modelName: 'locarnoClass',
  });
  return locarnoClass;
};