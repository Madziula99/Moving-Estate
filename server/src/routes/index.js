const { Router } = require("express");
const config = require("./config.js");
const properties = require("./properties.js");
const contact = require("./contact.js");
const auth = require("./auth.js");

module.exports = Router()
  .use("/properties", properties)
  .use("/contact", contact)
  .use("/auth", auth)
  .get("/config", config);
