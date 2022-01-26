const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "drd4nkpfz",
    api_key: "263371394841947",
    api_secret: "9HYL_k0hbulAQedIGyYJ6PC4j5U"
})

module.exports = { cloudinary };