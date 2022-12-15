const { Router } = require("express");
const { Property, Feature, Amenity } = require("../models");

async function create(req, res) {
  const { id } = req.params;
  const { icon, title } = req.body;

  try {
    const property = await Property.findByPk(id, { include: { all: true } });
    const newFeature = await Feature.findOne({ where: { icon: icon } });

    if (await property.hasFeature(newFeature)) return res.status(403).json({ error: "Feature icon already used" });

    await property.addFeature(newFeature, { through: { title: title } });

    const updatedProperty = await Property.findByPk(id, { include: { all: true } });

    res.json(await updatedProperty.detailView(Amenity));
  } catch (error) {
    res.status(403).json({ error });
  }
}

async function update(req, res) {
  const { id, icon } = req.params;
  const { title } = req.body;

  try {
    const property = await Property.findByPk(id, { include: { all: true } });
    const featureToUpdate = await Feature.findOne({ where: { icon: icon } });

    await property.addFeature(featureToUpdate, { through: { title: title } });

    const updatedProperty = await Property.findByPk(id, { include: { all: true } });

    res.json(await updatedProperty.detailView(Amenity));
  } catch (error) {
    res.status(403).json({ error });
  }
}

async function destroy(req, res) {
  const { id, icon } = req.params;

  try {
    const property = await Property.findByPk(id, { include: { all: true } });
    const featureToRemove = await Feature.findOne({ where: { icon: icon } });

    await property.removeFeature(featureToRemove);

    const updatedProperty = await Property.findByPk(id, { include: { all: true } });

    res.json(await updatedProperty.detailView(Amenity));
  } catch (error) {
    res.status(403).json({ error });
  }
}

module.exports = Router({ mergeParams: true })
  .post("/", create)
  .put("/:icon", update)
  .delete("/:icon", destroy)