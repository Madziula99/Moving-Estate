const { Router } = require("express");
const { Property, FloorPlan, Amenity } = require("../models");

async function index(req, res) {
  const { id } = req.params;

  try {
    const floorPlansList = await FloorPlan.findAll({
      where: { propertyId: id },
    });

    if (!floorPlansList) return res.status(404).json({ floor_plan: {} });
    const floorPlans = floorPlansList.map((floorPlan) => {
      return {
        floorPlanId: floorPlan.id,
        name: floorPlan.name,
        url: floorPlan.url,
      };
    });
    return res.json(floorPlans);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function create(req, res) {
  const { id } = req.params;
  const { name, url } = req.body;

  try {
    await FloorPlan.create({ name: name, url: url, propertyId: id });

    const property = await Property.findByPk(id, { include: { all: true } });

    res.json(await property.detailView(Amenity));
  } catch (error) {
    res.status(403).json({ error });
  }
}

async function update(req, res) {
  const { id, floorPlanId } = req.params;
  const { name, url } = req.body;

  try {
    const floor_plan = await FloorPlan.findByPk(floorPlanId);
    await floor_plan.update({ name, url });

    const property = await Property.findByPk(id, { include: { all: true } });

    res.json(await property.detailView(Amenity));
  } catch (error) {
    res.status(403).json({ error });
  }
}

async function destroy(req, res) {
  const { id, floorPlanId } = req.params;

  try {
    const floor_plan = await FloorPlan.findByPk(floorPlanId);
    await floor_plan.destroy();

    const property = await Property.findByPk(id, { include: { all: true } });

    res.json(await property.detailView(Amenity));
  } catch (error) {
    res.status(403).json({ error });
  }
}

module.exports = Router({ mergeParams: true })
  .get("/", index)
  .post("/", create)
  .put("/:floorPlanId", update)
  .delete("/:floorPlanId", destroy);
