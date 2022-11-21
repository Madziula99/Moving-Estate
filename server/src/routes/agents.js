const { Router } = require("express");
const { Agent } = require("../models");

async function index(req, res) {
  await Agent.findAll().then(agents => res.status(200).json({ agents }));
}

async function read(req, res) {
  const { id } = req.params;

  await Agent.findOne({
    where: { id: id }
  }).then(agent => {
    if (!agent) res.status(404).json({ error: `Agent with id = ${id} doesn't exist` })
    else res.status(200).json({ agent })
  })
}

async function create(req, res) {
  const { name, location, email, photo } = req.body;

  await Agent.create({ name, location, email, photo })
    .then(agent => res.status(200).json({ agent }))
    .catch(error => res.status(403).json({ error }));
}

async function update(req, res) {
  const { id } = req.params;
  const { name, location, email, photo } = req.body;

  let agent = await Agent.findByPk(id);

  if (!agent) return res.status(404).json({ error: `Agent with id = ${id} doesn't exist` });

  try {
      agent.update(
      { name, location, email, photo }
    )
    return res.json({ agent });
  } catch(error) {
    res.status(403).json({ error });
  }
}

module.exports = Router()
  .get("/", index)
  .get("/:id", read)
  .post("/", create)
  .put("/:id", update)