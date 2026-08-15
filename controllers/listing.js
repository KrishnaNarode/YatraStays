const Listing = require("../models/listing.js");
// for geocoding where u get location in latitue and longitude coordinates
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({
    accessToken: mapToken,
});


// index route
module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};

// show listing
module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        })
        .populate("owner");
    if (!listing) {
        req.flash("error", "The listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", { listing })
};

// create route
module.exports.createRouteListing = async (req, res, next) => {
    // geocding to get latitue and longitudde coordinates
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
    })
        .send()

    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    // whenever you create a new listing, it will show created by <name> because of one below line
    console.log(req.user);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    // geocding to get latitue and longitudde coordinates
    newListing.geometry = response.body.features[0].geometry;

    let savedListing = await newListing.save();
    console.log(savedListing);
    req.flash("success", "New Listing created!");
    res.redirect("/listings");
    console.log(newListing); ``
};

// edit route 
module.exports.editRouteListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!")
        res.redirect("/listings");
    }

    // this will show our orginal image in listing. so before editing you can see ur original image
    let OriginalImageUrl = listing.image.url;
    // upload image to cloudinary at height 300 width 250
    OriginalImageUrl = OriginalImageUrl.replace("/upload", "/upload/h_300,w_250");

    res.render("listings/edit.ejs", { listing, OriginalImageUrl });
};

// update route
module.exports.updateListingRoute = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }

    req.flash("success", "New Review Updated!");
    res.redirect(`/listings/${id}`);
};

// delete listing route
module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    let deletedlisting = await Listing.findByIdAndDelete(id);
    req.flash("success", "New Listing Deleted!");
    console.log(deletedlisting);
    res.redirect("/listings")
};

// for search route - when seatch location of ur city listing shows up
module.exports.searchListings = async (req, res) => {
    let { destination } = req.query;

    if (!destination || destination.trim() === "") {
        req.flash("error", "Please enter a destination to search.");
        return res.redirect("/listings");
    }

    const regex = new RegExp(destination, "i"); // case-insensitive partial match

    const allListings = await Listing.find({
        $or: [
            { location: regex },
            { country: regex },
            { title: regex },
        ],
    });

    if (allListings.length === 0) {
        req.flash("error", "No listings found for that destination.");
        return res.redirect("/listings");
    }

    res.render("listings/index.ejs", { allListings });
};