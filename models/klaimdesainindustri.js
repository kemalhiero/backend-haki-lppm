'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class klaimDesainIndustri extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.desainIndustri, {foreignKey: 'idKlaim'});
    }
  }
  klaimDesainIndustri.init({
    namaKlaim: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'klaimDesainIndustri',
  });
  return klaimDesainIndustri;
};