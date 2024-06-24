'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rivers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Rivers.hasOne(models.Decisions);

      Rivers.belongsTo(models.Admins, {
        foreignKey: 'adminId'
      });
      
    }
  }
  Rivers.init({
    adminId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    longitude: DataTypes.DOUBLE,
    latitude: DataTypes.DOUBLE,
    bod: DataTypes.STRING,
    cod: DataTypes.STRING,
    ph: DataTypes.STRING,
    colorLevel: DataTypes.STRING,
    picture: DataTypes.STRING,
    quality: DataTypes.STRING,
    validationFile: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rivers',
  });
  return Rivers;
};