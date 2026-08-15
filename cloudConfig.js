// the main purposoe of this file and clausdinary was so when i create new listing the inage of that gets store in claudinary webiste

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'kushna-proj',
    allowerdFormats: ["png", "jpg", "jpeg"],
  }
});

module.exports = {
    cloudinary,
    storage,
};