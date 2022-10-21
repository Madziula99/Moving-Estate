const { Router } = require("express");
const status = require("./status.js");
const things = require("./things.js");
const properties = require("./properties.js");
const contact = require("./contact.js");

module.exports = Router()
  .use("/things", things)
  .use("/properties", properties)
  .use("/contact", contact)
  .get("/status", status);
