if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

const dbUrl = process.env.ATLASDB;

main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("some error occured");
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});

  const listingsWithGeometry = [];

  for (let obj of initData.data) {
    try {
      const geoResponse = await geocodingClient
        .forwardGeocode({
          query: `${obj.location}, ${obj.country}`,
          limit: 1,
        })
        .send();

      const geometry = geoResponse.body.features[0]?.geometry;

      if (!geometry) {
        console.log(`No geocode result for: ${obj.location}, ${obj.country} — skipping.`);
        continue;
      }

      listingsWithGeometry.push({
        ...obj,
        owner: "6a80c075d009522849a7a4f7",
        geometry,
      });

      console.log(`Geocoded: ${obj.location}, ${obj.country}`);
    } catch (err) {
      console.log(`Failed to geocode ${obj.location}, ${obj.country}:`, err.message);
    }
  }

  await Listing.insertMany(listingsWithGeometry);
  console.log(`data was initialized (${listingsWithGeometry.length} listings)`);
};

initDB();