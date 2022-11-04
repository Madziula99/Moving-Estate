const { Router } = require("express");
const status = require("./status.js");
const properties = require("./properties.js");
const contact = require("./contact.js");
const login = require("./login.js");
const session = require("express-session");
const passport = require("passport");

module.exports = Router()
  .use(session({
    resave: false,
    saveUninitialized: true,
    secret: "bla bla bla"
  }))
  .use(passport.initialize())
  .use(passport.session())
  .use("/properties", properties)
  .use("/contact", contact)
  .use("/login", login)
  .get("/logout", (req, res, next) => {
    req.logout(function(err) {
      if (err) return next(err);
    });
    req.session.destroy();
    res.json({ message: "User logged out" });
  })
  .get("/status", status);
