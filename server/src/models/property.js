'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    static associate(models) {
      Property.belongsTo(models.Agent, { as: "agent", foreignKey: "agentId" }),
      Property.hasMany(models.PropertyImage, { as: "images", foreignKey: "propertyId" }),
      Property.belongsToMany(models.Amenity, { as: "amenities", through: models.PropertyAmenity, foreignKey: "propertyId" }),
      Property.belongsToMany(models.Icon, { as: "features", through: models.Feature, foreignKey: "propertyId" }),
      Property.hasMany(models.FloorPlan, { as: "floor_plans", foreignKey: "propertyId" }),
      Property.hasMany(models.Message, { as: "messages", foreignKey: "propertyId" })
    }
  }

  Property.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    area: DataTypes.INTEGER,
    bedrooms: DataTypes.INTEGER,
    bathrooms: DataTypes.INTEGER,
    agentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Property',
  });
  return Property;
};
