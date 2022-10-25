const { Router } = require("express");
const properties = require("../data.json");

async function read(req, res) {
  const { id } = req.params;

  const property = properties.find(property => property.id === id);

  if (!property) return res.status(404).json({ error: `Property with id ${id} not found` });

  res.json({ property });
}

module.exports = Router()
  .get("/:id", read)
