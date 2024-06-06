'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Decisions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Decisions.belongsTo(models.Rivers, {
        foreignKey: 'riverId'
      });

    }
  }
  Decisions.init({
    riverId: DataTypes.INTEGER,
    governmentName: DataTypes.STRING,
    information: DataTypes.STRING,
    decision: {
      type: DataTypes.ENUM,
      values: ['approved', 'not approved', 'under review'],
      defaultValue: 'under review'
    },
  }, {
    sequelize,
    modelName: 'Decisions',
  });
  return Decisions;
};