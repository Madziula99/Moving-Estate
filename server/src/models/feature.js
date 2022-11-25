'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Feature extends Model {
    static associate(models) {
      Feature.belongsToMany(models.Property, { through: models.PropertyFeature, foreignKey: "featureId" })
    }
  }
  Feature.init({
    feature: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Feature',
  });
  return Feature;
};