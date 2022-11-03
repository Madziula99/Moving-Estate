const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const { Router } = require("express");

const GOOGLE_CLIENT_ID = "778039279925-3i4dtm1d7h82i1uq72g8j04dqkqp6ekc.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/",
  },
  function verify(accessToken, refreshToken, profile, done) {
    console.log("verified")
    return done(null, profile);
  }
));

module.exports = Router()
  .get("/auth/google",
    passport.authenticate("google", { scope : ["profile", "email"] }))
  .get("/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/error" }),
    function(req, res) {
      // Successful authentication, redirect success.
      res.redirect("/success");
    });
