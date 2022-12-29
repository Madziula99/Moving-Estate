const { Router } = require("express");
const { Agent } = require("../models");

async function index(req, res) {
  let agents;

  try {
    agents = await Agent.findAll();
    return res.json({ agents });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function read(req, res) {
  const { id } = req.params;

  let agent;

  try {
    agent = await Agent.findByPk(id);
    if (!agent) return res.status(404).json({ agent: {} });
    return res.json({ agent });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function create(req, res) {
  const { name, location, email, photo } = req.body;

  let agent;

  try {
    agent = await Agent.create({ name, location, email, photo });
    return res.status(200).json({ agent });
  } catch (error) {
    res.status(403).json({ error });
  }
}

async function update(req, res) {
  const { id } = req.params;
  const { name, location, email, photo } = req.body;

  let agent = await Agent.findByPk(id);

  if (!agent)
    return res
      .status(404)
      .json({ error: `Agent with id = ${id} doesn't exist` });

  try {
    agent.update({ name, location, email, photo });
    return res.json({ agent });
  } catch (error) {
    res.status(403).json({ error });
  }
}

async function destroy(req, res) {
  const { id } = req.params;

  try {
    const agent = await Agent.findByPk(id);

    res.json(await agent.destroy());
  } catch (error) {
    res.status(403).json({ error });
  }
}

module.exports = Router()
  .get("/", index)
  .get("/:id", read)
  .post("/", create)
  .put("/:id", update)
  .delete("/:id", destroy);
