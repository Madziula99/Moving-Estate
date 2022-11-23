'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Icon extends Model {
    static associate(models) {
      Icon.belongsToMany(models.Property, { through: models.Feature, foreignKey: "iconId" })
    }
  }
  Icon.init({
    icon: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Icon',
  });
  return Icon;
};