const { Router } = require("express");
const status = require("./status.js");
const properties = require("./properties.js");
const contact = require("./contact.js");
const login = require("./login.js");

module.exports = Router()
  .use("/properties", properties)
  .use("/contact", contact)
  .use("/login", login)
  .get("/status", status);
