const { Router } = require("express");

async function create(req, res) {
  const message = req.body;

  if (!message) return res.status(404).json({ error: "Message is not found" });

  res.json({ message });
}

module.exports = Router()
  .post("/", create);
