const { Router } = require("express");
const { Agent } = require("../models");

function index(req, res) {
  Agent.findAll().then(agents => res.status(200).json({ agents }));
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
  .post("/", create)
  .put("/:id", update)