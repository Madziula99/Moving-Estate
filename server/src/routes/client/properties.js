const { Router } = require("express");
const { Property, Amenity } = require("../../models");

async function index(req, res) {
  const { page, ...filters } = req.query;

  const properties = await Property.filter(filters);

  const filteredProperties = properties.map((property) =>
    property.summaryView()
  );
  const options = await Property.getOptions();

  const pageSize = 8;
  let propertiesPages = [];

  for (let i = 0; i < filteredProperties.length; i += pageSize) {
    propertiesPages.push(filteredProperties.slice(i, i + pageSize));
  }

  return res.json({
    properties: propertiesPages[Number(page) - 1] || propertiesPages[0] || [],
    options: options,
    pages: propertiesPages.length,
  });
}

async function read(req, res) {
  const { id } = req.params;

  const property = await Property.findByPk(id, { include: { all: true } });

  if (!property)
    return res.status(404).json({ error: `Property with id ${id} not found` });

  return res.status(200).json(await property.detailView(Amenity));
}

module.exports = Router().get("/", index).get("/:id", read);
