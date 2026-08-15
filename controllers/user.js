const User = require("../models/user.js");

// signUp route
module.exports.signUp = async (req, res) => {
    try {
        console.log(req.body);
        let { username, email, password } = req.body;
        const newUser = new User({
            username, email
        });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome To Wunderlast!");
            res.redirect("/listings");
        })

    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

// logout route

module.exports.Logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            next(err);
        }
        req.flash("success", "you are successfully logged out!")
        res.redirect("/listings");
    })
};