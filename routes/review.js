const express = require("express");
const router = express.Router({mergeParams: true});
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js")
const {reviewSchema} = require("../schema.js");
const Review = require("../models/reviews.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/review.js");

// review route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.reviewRoute));


// delete review route

router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.deleteReviewRoute));

module.exports = router;

// req.flash("Error", "The listing you requested for does not exist!");