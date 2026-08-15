const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js")
const session = require("express-session");
const { MongoStore } = require('connect-mongo');
const passport = require("passport")
const localStratgey = require("passport-local");
const User = require("./models/user.js");
// for cloudinary platform - we used that in out proj to store images when u create a listings
if(process.env.NODE_ENV != "production"){
    require('dotenv').config()

}
// flash messages popups
const flash = require("connect-flash");

// imported as express
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

// database connection conde start
// const MONGO_URL = "mongodb://127.0.0.1:27017/Project";
const dbUrl = process.env.ATLASDB;

main()
    .then(() => {
        console.log("connected to db");
    })
    .catch(() => {
        console.log("some error occured");
    })

async function main() {
    await mongoose.connect(dbUrl);
}
// database connection code start

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    console.log("Hi, I am krish");
})


// cookies part
const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});


const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge : Date.now() + 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

app.use(session(sessionOptions));
app.use(flash());

// for passport management
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStratgey(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// it will flash popup message when listing created
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

// demo of checking passworrd functionality
// app.get("/demouser", async(req, res) => {
//     let fakeUser = new User({
//         email: "narode244@gmail.com",
//         password: "13",
//     });

// let registeredUser = await User.register(fakeUser, "hello");
// res.send("registered")
// });

// app.get("/", (req, res) => {
//     res.send("Hi, I am root");
// });



// code after imported as express
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);
// first part testing
// app.get("/testListing", async (req, res) => {
//     let sampleListing = new Listing({
//         title: "Welcome to Krish Villa",
//         decription: "Enjoy as many as possible",
//         price: 1250,
//         location: "Goa",
//         country: "India"
//     });

//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing");
// });

// middlewhare handlig

app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Somethig went wrong!" } = err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("error.ejs", {err})
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})