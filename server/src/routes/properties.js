const { Router } = require("express");
const amenities = require("./amenities.js");
const floor_plans = require("./floor_plans.js");
const images = require("./images.js");
const features = require("./features.js");
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

async function create(req, res) {
  const email = "jsmastery2022@gmail.com";
  const agentId = await Agent.findOne({ where: { email } }).then(agent => agent.id);

  try {
    const property = await Property.createProperty({...req.body, agentId}, Amenity);
    return res.status(200).json({ property });
  } catch (error) {
    return res.status(403).json({ error });
  }
}

async function update(req, res) {
  const { id } = req.params;
  const { title, location, description, type, mode, price, area, bedrooms, bathrooms} = req.body;

  let property = await Property.findByPk(id, { include: { all: true } });

  if (!property) return res.status(404).json({ error: `Property with id = ${id} doesn't exist` });

  try {
    await property.updateProperty({ title, location, description, type, mode, price, area, bedrooms, bathrooms});
    return res.json(await property.detailView(Amenity));
  } catch (error) {
    res.status(403).json({ error });
  }
}

async function destroy(req, res) {
  const { id } = req.params;
  const property = await Property.findByPk(id);

  res.json(await property.destroy());
}

async function retrieve(req, res) {
  const { id } = req.params;
  const { email } = req.query;

  const agent = await Agent.findOne({ where: { email: email }, include: { model: Property, where: { id: id } } });

  if (!agent) return res.status(401).json({ message: "No access" });

  const messages = await Message.findAll({ where: { propertyId: id } });

  return res.json(messages);
}

module.exports = Router()
  .get("/messages/:id", retrieve)
  .get("/", index)
  .get("/:id", read)
  .post("/", create)
  .put("/:id", update)
  .delete("/:id", destroy)
  .use("/:id/images", images)
  .use("/:id/floor_plans", floor_plans)
  .use("/:id/amenities", amenities)
  .use("/:id/features", features)
