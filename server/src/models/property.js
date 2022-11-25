'use strict';

const { Model, Op } = require('sequelize');

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

    static filter(filters, agent, images) {
      const { minArea, maxArea, minPrice, maxPrice, email, ...other} = filters;

      return this.findAll({
        where: [
          minArea && { area: {[Op.gt]: minArea} },
          maxArea && { area: { [Op.lt]: maxArea } },
          minPrice && { price: { [Op.gt]: minPrice } },
          maxPrice && { price: { [Op.lt]: maxPrice } },
          other
        ],
        include: [
          {
            model: agent,
            as: "agent",
            where: email && { email: email}
          },
          {
            model: images,
            as: "images",
          }
        ]
      });
    }

    static getOptions() {
      return this.findAll().then(properties => {
        const extract = (key) => [
          ...new Set(properties.map((property => property[key])))
        ];

        const options = {
          type: extract("type").sort() || [],
          mode: extract("mode").sort() || [],
          bedrooms: extract("bedrooms").sort((a, b) => { return a - b }) || [],
          bathrooms: extract("bathrooms").sort((a, b) => { return a - b }) || [],
          location: extract("location").sort((a, b) => { return a - b }) || []
        };

        return options;
      })
    }

    detailView() {
      return {
        id: this.id,
        title: this.title,
        location: this.location.split(", "),
        images: [...this.images.map(image => image.link)],
        description: this.description,
        type: this.type,
        mode: this.mode,
        price: this.price,
        area: this.area,
        bedrooms: this.bedrooms,
        bathrooms: this.bathrooms,
        amenities: this.amenities.map(amenity => {
          return {
            title: amenity.title,
            available: amenity.PropertyAmenity.available
          }
        }),
        features: this.features.map(feature => {
          return {
            icon: feature.icon,
            title: feature.Feature.title
          }
        }),
        floor_plans: this.floor_plans.map(floor_plan => {
          return {
            name: floor_plan.name,
            url: floor_plan.url
          }
        }),
        agent: {
          name: this.agent.name,
          location: this.agent.location,
          email: this.agent.email,
          photo: this.agent.photo
        }
      }
    }

    summaryView() {
      const image = this.images ? this.images[0].link : "";
      return {
        id: this.id,
        title: this.title,
        location: this.location.split(", "),
        images: image,
        description: this.description,
        type: this.type,
        mode: this.mode,
        price: this.price,
        area: this.area,
        bedrooms: this.bedrooms,
        bathrooms: this.bathrooms
      }
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
