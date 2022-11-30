const { Router } = require("express");
const { Message, Property, Agent, PropertyImage, Amenity, Feature, FloorPlan, PropertyFeature } = require("../models");

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
  //email from req.user
  const agentId = 1;

  try {
    const property = await Property.createProperty({...req.body, agentId}, Amenity, Feature);
    return res.status(200).json({ property });
  } catch (error) {
    return res.status(403).json({ error });
  }
}

async function update(req, res) {
  const { id } = req.params;
  const { title, location, description, type, mode, price, area, bedrooms, bathrooms, images, features, amenities, floor_plans } = req.body;

  let property = await Property.findByPk(id);

  if (!property) return res.status(404).json({ error: `Property with id = ${id} doesn't exist` });

  try {
    await property.updateProperty({ title, location, description, type, mode, price, area, bedrooms, bathrooms, images, features, amenities, floor_plans }, { Amenity, PropertyImage, Feature, FloorPlan, PropertyFeature });
    const p = await Property.findByPk(id, { include: { all: true } })
    return res.json(await p.detailView(Amenity));
  } catch (error) {
    res.status(403).json({ error });
  }
}

module.exports = Router()
  .get("/messages/:id", retrieve)
  .get("/", index)
  .get("/:id", read)
  .post("/", create)
  .put("/:id", update)
