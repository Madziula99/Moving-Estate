const { Router } = require("express");
const { Agent } = require("../models");

function index(req, res) {
  Agent.findAll().then(agents => res.status(200).json({ agents }));
}

function read(req, res) {
  const { id } = req.params;

  Agent.findOne({
    attributes: ["name", "location", "email", "photo"],
    where: { id: id }
  }).then(agent => {
    if (agent === null) res.status(404).json({ message: `Agent with id = ${id} doesn't exist` })
    else res.status(200).json({ agent })
  })
}

function create(req, res) {
  const { name, location, email, photo } = req.body;

  Agent.create({ name, location, email, photo })
    .then(() => res.status(200).json({ message: "Agent created" }))
    .catch(error => res.status(418).json({ message: "Agent can't be created", error: error }));
}

function update(req, res) {
  const { id } = req.params;
  const { name, location, email, photo } = req.body;

  Agent.update(
    { name, location, email, photo },
    { where: { id: id }}
  )
  .then(() => res.status(200).json({ message: "Agent updated" }))
  .catch(error => res.status(418).json({ message: "Agent not updated", error: error }));
}

module.exports = Router()
  .get("/", index)
  .get("/:id", read)
  .post("/", create)
  .put("/:id", update)