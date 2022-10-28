const { Router } = require("express");
const status = require("./status.js");
const properties = require("./properties.js");
const contact = require("./contact.js");

module.exports = Router()
  .use("/properties", properties)
  .use("/contact", contact)
  .get("/status", status);
