
// this file is for signup and login route of our project

const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");

const userController = require("../controllers/user.js");

// using router route - combing all request coming on "/signup"
router.route("/signup")
.get((req, res) => {
    res.render("users/signup.ejs");
})
.post(wrapAsync(userController.signUp));

router.get("/login", (req, res) => {
    res.render("users/login.ejs");
})

router.post("/login", saveRedirectUrl, passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
}),
    async (req, res) => {
        req.flash("success", "Welcome Back To WunderLast!");
        let redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl);
    }
);

router.get("/logout", userController.Logout);
module.exports = router;