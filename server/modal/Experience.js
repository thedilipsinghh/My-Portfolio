const mongoose = require("mongoose")

module.exports = mongoose.model("exp", new mongoose.Schema({
    title: String,
    place: String,
    date: String,
    type: String,
    description: String
}, { timestamps: true }))