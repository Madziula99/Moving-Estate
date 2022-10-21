const { Router } = require("express");

async function create(req, res) {
  const message = req.body;

  res.json({ message });
}

module.exports = Router()
  .post("/", create);
