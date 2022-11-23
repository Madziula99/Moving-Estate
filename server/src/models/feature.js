'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Feature extends Model {

    static associate(models) {
      Feature.belongsTo(models.Icon, { foreignKey: "iconId" }),
      Feature.belongsTo(models.Property, { foreignKey: "propertyId" })
    }
  }
  Feature.init({
    iconId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    propertyId: {
      allowNull: false,
      type: DataTypes.STRING
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Feature',
  });
  return Feature;
};