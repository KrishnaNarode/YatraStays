const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

// file upload purpose we need this 2 
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

const listingController = require("../controllers/listing.js");


// router.route - it combines multiple routes together who has requests on same route so combing
// index route & create route
router
.route("/")
.get(wrapAsync(listingController.index))
.post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing, 
    wrapAsync(listingController.createRouteListing)
);

// for search route - when seatch location of ur city listing shows up
router.get("/search", wrapAsync(listingController.searchListings));

// New and create route
router.get("/new", isLoggedIn, (req, res) => {
    res.render("listings/new.ejs");
})

// with help of router - combining show, update, delete route
router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn, isOwner,
    upload.single("listing[image]"),
    validateListing, wrapAsync(listingController.updateListingRoute))
.delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));

// edit route

router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.editRouteListing));

module.exports = router;