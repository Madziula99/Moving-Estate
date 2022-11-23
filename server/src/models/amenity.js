'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Amenity extends Model {
    static associate(models) {
      Amenity.belongsToMany(models.Property, { through: models.PropertyAmenity, foreignKey: "amenityId" })
    }
  }

  Amenity.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Amenity',
  });
  return Amenity;
};
