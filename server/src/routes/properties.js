const { Router } = require("express");
const properties = require("../data.json");
const { Message, Agent } = require("../models");

async function read(req, res) {
  const { id } = req.params;

  const property = properties.find(property => property.id === id);

  if (!property) return res.status(404).json({ error: `Property with id ${id} not found` });

  property.agent = await Agent.findOne({
    attributes: ["name", "location", "email", "photo"],
    where: { id: property.agentId }
  })

  res.json({ property });
}

function filterProperties(filters) {
  const filterKeys = Object.keys(filters);

  const filteredProperties = properties.filter(item => filterKeys.every(key => {
    const filterValue = filters[key];

    if (key === "email") return item.agent.email === filterValue;

    if (!item.hasOwnProperty(key)) return false;

    if (key === "type") return item["type"] === filterValue;
    if (key === "mode") return item["mode"] === filterValue;
    if (key === "bathrooms") return item["bathrooms"] === Number(filterValue);
    if (key === "bedrooms") return item["bedrooms"] === Number(filterValue);
    if (key === "location") return item["location"][1] === filterValue;
    if (key === "minArea") return item["area"] >= Number(filterValue);
    if (key === "maxArea") return item["area"] <= Number(filterValue);
    if (key === "minPrice") return item["price"] >= Number(filterValue);
    if (key === "maxPrice") return item["price"] <= Number(filterValue);
    if (key === "minYearBuilt") return item["year"] >= Number(filterValue);

    return true;
  }));

  return filteredProperties;
}

function optionsObject() {
  const extract = (key) => [
    ...new Set(properties.map((property => property[key])))
  ];

  const options = {
    type: extract("type").sort() || [],
    mode: extract("mode").sort() || [],
    bedrooms: extract("bedrooms").sort((a, b) => { return a - b }) || [],
    bathrooms: extract("bathrooms").sort((a, b) => { return a - b }) || [],
    location: [...new Set(properties.map((property => property["location"][1])))].sort() || []
  };

  return options;
}

async function index(req, res) {
  const options = optionsObject();
  const { page, ...filters } = req.query;

  const filteredProperties = filterProperties(filters).map(property => {
    return {
      id: property.id,
      title: property.title,
      location: property.location,
      image: property.images[0],
      description: property.description,
      type: property.type,
      mode: property.mode,
      price: property.price,
      area: property.area,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms
    }
  });

  if (filters.email) {
    res.json({
      properties: filteredProperties || [],
      agentName: properties.find(property => property.agent.email === filters.email).agent.name || ""
    });
  } else {
    const pageSize = 8;
    let propertiesPages = [];

    for (let i = 0; i < filteredProperties.length; i += pageSize) {
      propertiesPages.push(filteredProperties.slice(i, i + pageSize));
    }

    res.json({
      properties: propertiesPages[Number(page) - 1] || [],
      options: options,
      pages: propertiesPages.length
    });
  }
}

async function retrieve(req, res) {
  const { id } = req.params;
  const { email } = req.query;

  const agentProperties = filterProperties({ email: email }).map(property => property.id);
  const hasAccess = agentProperties.includes(id);

  if (hasAccess) {
    const messages = await Message.findAll({ where: { property_id: id } });

    if (messages === null) res.json({ messages: [] });
    else res.json(messages);
  } else {
    res.status(401).json({ message: "Not Authorized" });
  }
}

module.exports = Router()
  .get("/", index)
  .get("/messages/:id", retrieve)
  .get("/:id", read)
