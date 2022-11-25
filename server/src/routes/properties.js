const { Router } = require("express");
const { Message, Property, Agent, PropertyImage, Amenity } = require("../models");

async function read(req, res) {
  const { id } = req.params;

  const property = await Property.findByPk(id, { include: { all: true } });

  if (!property) return res.status(404).json({ error: `Property with id ${id} not found` });

  return res.status(200).json(await property.detailView(Amenity));
}

async function index(req, res) {
  const { page, ...filters } = req.query;

  const properties = await Property.filter(filters, Agent, PropertyImage);

  if (filters.email) {
    if (properties.length === 0) return res.status(404).json({ message: `Agent: ${filters.email} has no properties` });
    const agentName = properties[0].agent.name;

    return res.json({
      properties: properties.map(property => property.summaryView()),
      agentName: agentName
    });
  }

  const filteredProperties = properties.map(property => property.summaryView());
  const options = await Property.getOptions();

  const pageSize = 8;
  let propertiesPages = [];

  for (let i = 0; i < filteredProperties.length; i += pageSize) {
    propertiesPages.push(filteredProperties.slice(i, i + pageSize));
  }

  return res.json({
    properties: propertiesPages[Number(page) - 1] || propertiesPages[0] || [],
    options: options,
    pages: propertiesPages.length
  });
}

async function retrieve(req, res) {
  const { id } = req.params;
  const { email } = req.query;

  const agent = await Agent.findOne({ where: { email: email }, include: { model: Property, where: { id: id }} });

  if (!agent) return res.status(401).json({ message: "No access" });

  const messages = await Message.findAll({ where: { propertyId: id } });

  return res.json(messages);
}

async function create(req, res) {
  //email in req.body? or in req.query
  const { title, location, description, type, mode, price, area, bedrooms, bathrooms, images, features, amenities, floor_plans } = req.body;
  const agentId = 1;

  const lastId = await Property.findOne({ attributes: ["id"], where: { type: type }, order: [["id", "DESC"]] }).then(property => property.id);
  const id = lastId.charAt(0) + (Number(lastId.slice(1)) + 1).toString().padStart(3, "0");

  try {
    const property = await Property.create(
      { id, title, location, description, type, mode, price, area, bedrooms, bathrooms, agentId,
        images: images.map(image => { return { link: image } }),
        amenities: amenities.map(amenity => {
          return { title: amenity.title, PropertyAmenity: { available: amenity.available } }
        }),
        features: features.map(feature => {
          return { icon: feature.icon, Feature: { title: feature.title } }
        }),
        floor_plans: floor_plans.map(image => { return { name: image.name, url: image.url } })
      },
      { include: { all: true } }
    )

    return res.status(200).json({ property });
  } catch (error) {
    return res.status(403).json({ error });
  }
}

// async function update(req, res) {
//   const { id } = req.params;
//   const { title, location, description, type, mode, price, area, bedrooms, bathrooms, images, features, amenities, floor_plans } = req.body;

//   let property = await Property.findByPk(id);

//   if (!property) return res.status(404).json({ error: `Property with id = ${id} doesn't exist` });

//   try {
//     property.update({ title, location, description, type, mode, price, area, bedrooms, bathrooms });
//     return res.json({ property });
//   } catch (error) {
//     res.status(403).json({ error });
//   }
// }

module.exports = Router()
  .get("/messages/:id", retrieve)
  .get("/", index)
  .get("/:id", read)
  .post("/", create)
  // .put("/:id", update)
