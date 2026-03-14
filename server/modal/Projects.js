const mongoose = require("mongoose")

module.exports = mongoose.model("projects", new mongoose.Schema({
    title: String,
    description: String,
    note: String,
    image: String,
    tags: String,
    liveLink: String,
    githubLink: String
}, { timestamps: true }))