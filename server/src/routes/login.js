const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const { Router } = require("express");

const GOOGLE_CLIENT_ID = "778039279925-l3o03a49ocrdm5lsl80ue5c5hhgs2bo6.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3500/api/login/google/callback",
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
  .get("/google",
    passport.authenticate("google", { scope: ["profile", "email"], prompt: "select_account" }))
  .get("/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/api/login/error",
      successRedirect: "/api/login/protected"
    })
  )
  .get("/error", (_, res) => res.json({ error: "An error has occurred" }))
  .get("/protected", isLoggedIn, (_, res) => res.json({ message: "User logged in" }))
