const cloud = require("cloudinary").v2
require("dotenv").config({})

cloud.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: process.env.CLOUDINARY_API_NAME,
})

module.exports = cloud