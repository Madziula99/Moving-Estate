'use strict';

const { Model, Op } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    static associate(models) {
      Property.belongsTo(models.Agent, { as: "agent", foreignKey: "agentId" }),
      Property.hasMany(models.PropertyImage, { as: "images", foreignKey: "propertyId" }),
      Property.belongsToMany(models.Amenity, { as: "amenities", through: models.PropertyAmenity, foreignKey: "propertyId" }),
      Property.belongsToMany(models.Feature, { as: "features", through: models.PropertyFeature, foreignKey: "propertyId" }),
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

    static async createProperty(values, Amenity, Feature) {
      const { title, location, description, type, mode, price, area, bedrooms, bathrooms, agentId, amenities, images, features, floor_plans} = values;

      const lastId = await Property.findOne({ attributes: ["id"], where: { type: type }, order: [["id", "DESC"]] }).then(property => property.id);
      const id = lastId.charAt(0) + (Number(lastId.slice(1)) + 1).toString().padStart(3, "0");

      const p = await Property.create(
        {
          id, title, location, description, type, mode, price, area, bedrooms, bathrooms, agentId,
          images: images.map(image => { return { link: image } }),
          floor_plans: floor_plans.map(image => { return { name: image.name, url: image.url } })
        },
        { include: { all: true } }
      );

      features.map(async item => {
        const f = await Feature.findOne({ where: { feature: item.feature } })
        await p.addFeature(f, { through: { title: item.title }})
      });

      const a = await Amenity.findAll({ where: { title: { [Op.in]: amenities } } });
      await p.setAmenities(a);

      const property = await Property.findByPk(id, { include: { all: true } })

      return await property.detailView(Amenity);
    }

    async updateProperty(values, models) {
      const { title, location, description, type, mode, price, area, bedrooms, bathrooms, images, features, amenities, floor_plans } = values;
      const { Amenity, PropertyImage, Feature, FloorPlan } = models;
      const propertyId = this.id;

      await this.update({ title, location, description, type, mode, price, area, bedrooms, bathrooms });

      const newAmenities = await Amenity.findAll({ where: { title: { [Op.in]: amenities } } });
      await this.setAmenities(newAmenities);

      await this.getFeatures().then(existingFeatures => existingFeatures.map(async feature => {
        if(!features.some(f => f.feature === feature.feature)) return await this.removeFeature(feature);
      }))

      await Promise.all(features.map(async item => {
        const newFeature = await Feature.findOne({ where: { feature: item.feature } });
        const newTitle = item.title;
        await this.addFeature(newFeature, { through: { title: newTitle } });
      }));

      await this.getImages().then(existingImages => existingImages.map(async image => {
        if (!images.includes(image.link)) return await image.destroy();
      }))

      await Promise.all(images.map(async image => {
        const [newImage, created] = await PropertyImage.findOrCreate({
          where: { link: image },
          defaults: { propertyId: propertyId, link: image }
        });
        if (created) await this.addImage(newImage);
      }));

      await this.getFloor_plans().then(existingPlans => existingPlans.map(async plan => {
        if (!floor_plans.find(floor_plan => floor_plan.name === plan.name && floor_plan.url === plan.url)) {
          return await plan.destroy();
        }
      }))

      await Promise.all(floor_plans.map(async plan => {
        const [newPlan, created] = await FloorPlan.findOrCreate({
          where: {
            [Op.and]: {
              name: plan.name,
              url: plan.url
            }
          },
          defaults: { propertyId: propertyId, name: plan.name, url: plan.url }
        });
        if (created) await this.addFloor_plan(newPlan);
      }));

      return await Property.findByPk(this.id, { include: { all: true } })
    }

    async detailView(Amenity) {
      const amenities = await Amenity.findAll().then(amenities => amenities.map(amenity => amenity.title));

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
        amenities: amenities.map(amenity => {
          const available = this.amenities.some(a => a.title === amenity);
          return {
            title: amenity,
            available: available
          }
        }
        ),
        features: this.features.map(feature => {
          return {
            feature: feature.feature,
            title: feature.PropertyFeature.title
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
