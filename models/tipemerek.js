'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class tipeMerek extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.merek, {foreignKey: 'idTipeMerek'});
    }
  }
  tipeMerek.init({
    namaMerek: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tipeMerek',
  });
  return tipeMerek;
};