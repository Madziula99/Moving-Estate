const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const { Router } = require("express");
const session = require("express-session");
const config = require("config");
const AUTH = config.get("auth");

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

passport.use(new GoogleStrategy({
  clientID: AUTH.GOOGLE_CLIENT_ID,
  clientSecret: AUTH.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3500/api/auth/login/google/callback",
  },
  function verify(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = Router()
  .use(session({
    resave: false,
    saveUninitialized: true,
    secret: AUTH.secret
  }))
  .use(passport.initialize())
  .use(passport.session())
  .get("/login/google",
    passport.authenticate("google", { scope: ["profile", "email"], prompt: "select_account" }))
  .get("/login/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/api/auth/login/error",
      successRedirect: "http://localhost:3000/admin"
    })
  )
  .get("/login/error", (_, res) => res.json({ error: "An error has occurred" }))
  .get("/login/protected", isLoggedIn, (req, res) => {
    res.json({
      message: "User logged in",
      user: req.user
    });
  })
  .get("/logout", (req, res, next) => {
    req.logout((err) => {
      if (err) return next(err);
    });
    req.session.destroy();
    res.json({ message: "User logged out" });
  })
